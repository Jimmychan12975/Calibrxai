"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    if (!name || !email || !message) {
      setStatus("Please fill out all required fields.");
      return;
    }

    try {
      // For static export, we'll use a form submission service
      // You can use services like Formspree, Netlify Forms, or your own endpoint
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      if (subject) formData.append('subject', subject);
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
        setName(""); setEmail(""); setSubject(""); setMessage("");
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("Network error. Please try again.");
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2 className="section-title">Get in Touch</h2>
        <p>Ready to start building your AI solution brick by brick? Our team of experts is here to help you transform your business with intelligent, trustworthy AI technology.</p>
        <img src="https://assets-persist.lovart.ai/agent_images/c918b178-4159-4ca5-afd6-4326f65a2845.png" alt="Contact Calibrx AI" style={{ width: "100%", margin: "30px 0", borderRadius: 8 }} />
        
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon"><i className="ri-map-pin-line" /></div>
            <div className="contact-text">
              <h4>Address</h4>
              <p>3812 Lupine ln apt I, CA 91302</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon"><i className="ri-mail-line" /></div>
            <div className="contact-text">
              <h4>Email</h4>
              <p><a href="mailto:hello@calibrxai.com">hello@calibrxai.com</a></p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon"><i className="ri-phone-line" /></div>
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
            <label htmlFor="name">Name</label>
            <input id="name" type="text" className="form-control" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" className="form-control" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" className="form-control" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" className="form-control" placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
          {status && <div className="text-sm" style={{ marginTop: 12, color: "#555" }}>{status}</div>}
        </form>
      </div>
    </section>
  );
} 