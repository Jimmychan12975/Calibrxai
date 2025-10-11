"use client";

import { useState } from "react";
import Image from "next/image";
import { ContactFormData, FormErrors } from "@/types";

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const submit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setStatus(null);
    setErrors({});

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      submitData.append("name", formData.name.trim());
      submitData.append("email", formData.email.trim());
      if (formData.subject?.trim()) submitData.append("subject", formData.subject.trim());
      submitData.append("message", formData.message.trim());

      const response = await fetch("https://formspree.io/f/mqalgnzz", {
        method: "POST",
        body: submitData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("Thanks! We'll get back to you at your email.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2 className="section-title">Get in Touch</h2>
        <p>
          Ready to start building your AI solution brick by brick? Our team of experts is here to help you transform your business with
          intelligent, trustworthy AI technology.
        </p>
        <Image
          src="https://assets-persist.lovart.ai/agent_images/c918b178-4159-4ca5-afd6-4326f65a2845.png"
          alt="Contact Calibrx AI - Get in touch with our AI experts"
          width={800}
          height={400}
          style={{ width: "100%", margin: "30px 0", borderRadius: 8 }}
        />

        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <i className="ri-map-pin-line" />
            </div>
            <div className="contact-text">
              <h4>Address</h4>
              <p>3812 Lupine ln apt I, CA 91302</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <i className="ri-mail-line" />
            </div>
            <div className="contact-text">
              <h4>Email</h4>
              <p>
                <a href="mailto:hello@calibrxai.com">hello@calibrxai.com</a>
              </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <i className="ri-phone-line" />
            </div>
            <div className="contact-text">
              <h4>Phone</h4>
              <p>+1 (909) 568-3588</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <h3 style={{ color: "#003557", marginBottom: 30, fontSize: 28 }}>Send us a message</h3>
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              type="text"
              className={`form-control ${errors.name ? 'error' : ''}`}
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <div id="name-error" className="error-message">{errors.name}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              className={`form-control ${errors.email ? 'error' : ''}`}
              placeholder="Your email address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <div id="email-error" className="error-message">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              className="form-control"
              placeholder="Subject"
              value={formData.subject || ""}
              onChange={(e) => handleInputChange("subject", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              className={`form-control ${errors.message ? 'error' : ''}`}
              placeholder="Your message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && <div id="message-error" className="error-message">{errors.message}</div>}
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {status && (
            <div className="text-sm" style={{ marginTop: 12, color: "#555" }}>
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}


