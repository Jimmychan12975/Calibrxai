import { useState, useCallback } from "react";
import { ContactFormData, FormErrors } from "@/types";

interface UseFormOptions {
  initialValues: ContactFormData;
  validate?: (values: ContactFormData) => FormErrors;
  onSubmit: (values: ContactFormData) => Promise<void>;
}

export function useForm({ initialValues, validate, onSubmit }: UseFormOptions) {
  const [values, setValues] = useState<ContactFormData>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = useCallback((field: keyof ContactFormData, value: string) => {
    setValues(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  }, [errors]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setErrors({});

    if (validate) {
      const validationErrors = validate(values);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    }

    setIsSubmitting(true);
    try {
      await onSubmit(values);
      setStatus("Form submitted successfully!");
      setValues(initialValues);
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }, [values, validate, onSubmit, initialValues]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setStatus(null);
    setIsSubmitting(false);
  }, [initialValues]);

  return {
    values,
    errors,
    isSubmitting,
    status,
    handleChange,
    handleSubmit,
    reset,
  };
}

