"use client";

import { FormEvent, useState } from "react";
import { EMAIL } from "@/lib/contact";

export function ContactForm({
  labels,
}: {
  labels: {
    name: string;
    email: string;
    message: string;
    submit: string;
    hint: string;
  };
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    const body = `Nom: ${name}\nEmail: ${email}\n\n${message}`;
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Contact WI NOU KAPAB — ${name}`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label>
        {labels.name}
        <input name="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        {labels.email}
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        {labels.message}
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="btn btn-primary">
        {labels.submit}
      </button>
      <p style={{ fontWeight: 400, opacity: 0.75 }}>{labels.hint}</p>
    </form>
  );
}
