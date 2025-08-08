"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    if (!name || !email || !message) {
      setStatus("Please fill out all fields.");
      return;
    }

    try {
      // For static export, we'll use a form submission service
      // You can use services like Formspree, Netlify Forms, or your own endpoint
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      
      // Use Formspree endpoint
      const response = await fetch('https://formspree.io/f/mqalgnzz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("Thanks! We'll get back to you at your email.");
        setName(""); setEmail(""); setMessage("");
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("Network error. Please try again.");
    }
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-2 text-[--color-text-muted]">Email us at <a className="underline hover:text-[--color-primary]" href="mailto:hello@calibrxai.com">hello@calibrxai.com</a> or use the form below.</p>

      <form onSubmit={submit} className="mt-8 max-w-xl space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-md border border-black/10 dark:border-white/15 bg-surface px-3 py-2 outline-none focus:ring-2 focus:ring-[--color-accent]" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md border border-black/10 dark:border-white/15 bg-surface px-3 py-2 outline-none focus:ring-2 focus:ring-[--color-accent]" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full rounded-md border border-black/10 dark:border-white/15 bg-surface px-3 py-2 min-h-[120px] outline-none focus:ring-2 focus:ring-[--color-accent]" placeholder="How can we help?" />
        </div>
        <button type="submit" className="inline-flex items-center rounded-md bg-[--color-accent] text-white px-4 py-2 font-medium hover:opacity-90">Send Message</button>
        {status && <div className="text-sm text-[--color-text-muted]">{status}</div>}
      </form>
    </div>
  );
} 