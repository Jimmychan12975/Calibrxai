"use client";

import { useState } from "react";
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
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const submit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setStatus(null);
    setErrors({});
    if (!validateForm()) return;
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
        setStatus("Message sent. We'll get back to you shortly.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-[#111111] border ${
      errors[field] ? "border-red-500/50" : "border-white/[0.08]"
    } rounded-lg px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-white/20 transition-colors`;

  return (
    <section className="py-24 bg-[#0A0A0A]" id="contact">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Info */}
          <div>
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-4">Contact</p>
            <h2 className="text-4xl font-bold text-white mb-4 font-display">Get in touch</h2>
            <p className="text-zinc-400 leading-relaxed mb-10 max-w-sm">
              Have a question, partnership idea, or just want to say hi? We read every message.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#111111] border border-white/[0.08] flex items-center justify-center text-zinc-400 shrink-0">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 mb-0.5">Email</p>
                  <a href="mailto:hello@calibrxai.com" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    hello@calibrxai.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#111111] border border-white/[0.08] flex items-center justify-center text-zinc-400 shrink-0">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 mb-0.5">Location</p>
                  <p className="text-sm text-zinc-300">Calabasas, CA, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#111111] border border-white/[0.08] rounded-2xl p-8">
            <form onSubmit={submit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs text-zinc-400 mb-2">Name *</label>
                <input
                  id="name"
                  type="text"
                  className={inputClass("name")}
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs text-zinc-400 mb-2">Email *</label>
                <input
                  id="email"
                  type="email"
                  className={inputClass("email")}
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs text-zinc-400 mb-2">Subject</label>
                <input
                  id="subject"
                  type="text"
                  className={inputClass("subject")}
                  placeholder="What's this about?"
                  value={formData.subject || ""}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-zinc-400 mb-2">Message *</label>
                <textarea
                  id="message"
                  rows={5}
                  className={`${inputClass("message")} resize-none`}
                  placeholder="Tell us what's on your mind..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-100 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>

              {status && (
                <p className="text-sm text-center text-zinc-400 border border-white/[0.08] rounded-lg py-2 px-3">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
