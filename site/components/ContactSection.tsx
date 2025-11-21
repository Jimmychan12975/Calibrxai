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
    <section className="py-20 bg-zinc-950 relative overflow-hidden" id="contact">
       {/* Background grid for consistency */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] z-0" />
       
       <div className="container relative z-10 flex flex-col lg:flex-row gap-16 items-start">
        
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono mb-6 backdrop-blur-md">
            CONTACT SYSTEM
          </div>
          <h2 className="text-4xl font-bold mb-6 text-white font-display">Get in Touch</h2>
          <p className="text-lg text-zinc-400 mb-8 leading-relaxed font-light">
            Ready to start building your AI solution brick by brick? Our team of experts is here to help you transform your business with
            intelligent, trustworthy AI technology.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-cyan-400 text-xl group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                <i className="ri-map-pin-line" />
              </div>
              <div>
                <h4 className="font-bold text-white font-display">Address</h4>
                <p className="text-zinc-500 font-mono text-sm">3812 Lupine ln apt I, CA 91302</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-cyan-400 text-xl group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                <i className="ri-mail-line" />
              </div>
              <div>
                <h4 className="font-bold text-white font-display">Email</h4>
                <p>
                  <a href="mailto:hello@calibrxai.com" className="text-zinc-500 hover:text-cyan-400 transition-colors font-mono text-sm">hello@calibrxai.com</a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-cyan-400 text-xl group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                <i className="ri-phone-line" />
              </div>
              <div>
                <h4 className="font-bold text-white font-display">Phone</h4>
                <p className="text-zinc-500 font-mono text-sm">+1 (909) 568-3588</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full bg-zinc-900/50 backdrop-blur-sm p-8 md:p-10 border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden">
          {/* Decorative top line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          
          <h3 className="text-2xl font-bold mb-8 text-white font-display">Send us a message</h3>
          <form onSubmit={submit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">Name *</label>
              <input
                id="name"
                type="text"
                className={`w-full bg-black/40 border ${errors.name ? 'border-red-500' : 'border-white/10'} p-4 text-white placeholder-zinc-600 focus:border-cyan-500 focus:outline-none transition-colors rounded-lg font-light`}
                placeholder="ENTER DESIGNATION"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && <div id="name-error" className="text-red-500 text-xs mt-1 font-mono">{errors.name}</div>}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">Email *</label>
              <input
                id="email"
                type="email"
                className={`w-full bg-black/40 border ${errors.email ? 'border-red-500' : 'border-white/10'} p-4 text-white placeholder-zinc-600 focus:border-cyan-500 focus:outline-none transition-colors rounded-lg font-light`}
                placeholder="ENTER CONTACT FREQUENCY"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && <div id="email-error" className="text-red-500 text-xs mt-1 font-mono">{errors.email}</div>}
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">Subject</label>
              <input
                id="subject"
                type="text"
                className="w-full bg-black/40 border border-white/10 p-4 text-white placeholder-zinc-600 focus:border-cyan-500 focus:outline-none transition-colors rounded-lg font-light"
                placeholder="TRANSMISSION SUBJECT"
                value={formData.subject || ""}
                onChange={(e) => handleInputChange("subject", e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">Message *</label>
              <textarea
                id="message"
                rows={5}
                className={`w-full bg-black/40 border ${errors.message ? 'border-red-500' : 'border-white/10'} p-4 text-white placeholder-zinc-600 focus:border-cyan-500 focus:outline-none transition-colors resize-y rounded-lg font-light`}
                placeholder="INPUT DATA STREAM..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && <div id="message-error" className="text-red-500 text-xs mt-1 font-mono">{errors.message}</div>}
            </div>

            <button type="submit" className="w-full bg-white text-black font-bold uppercase tracking-wider py-4 hover:bg-cyan-400 transition-all duration-300 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]" disabled={isSubmitting}>
              {isSubmitting ? "TRANSMITTING..." : "INITIATE TRANSMISSION"}
            </button>
            
            {status && (
              <div className="text-sm text-cyan-400 mt-4 text-center font-mono border border-cyan-500/20 bg-cyan-500/10 p-2 rounded">
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
