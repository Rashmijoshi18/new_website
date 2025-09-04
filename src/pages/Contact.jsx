import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    // small client-side validation
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", text: "Please fill all fields." });
      return;
    }
    // For a simple portfolio, mailto is acceptable as a fallback:
    const mailto = `mailto:you@domain.com?subject=${encodeURIComponent(
      "Contact from Portfolio"
    )}&body=${encodeURIComponent(
      `${form.name} (${form.email}):\n\n${form.message}`
    )}`;
    window.location.href = mailto;
    setStatus({ type: "success", text: "Opening your email client..." });
  }

  return (
    <section className="container-max mx-auto max-w-xl">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <form onSubmit={submit} className="space-y-3">
        <div>
          <label className="block text-sm">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={update}
            className="w-full mt-1 px-3 py-2 border rounded-md bg-white dark:bg-slate-900"
          />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={update}
            type="email"
            className="w-full mt-1 px-3 py-2 border rounded-md bg-white dark:bg-slate-900"
          />
        </div>
        <div>
          <label className="block text-sm">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={update}
            className="w-full mt-1 px-3 py-2 border rounded-md bg-white dark:bg-slate-900"
            rows="5"
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-accent text-white"
          >
            Send
          </button>
        </div>
        {status && (
          <div
            className={`text-sm ${
              status.type === "error" ? "text-red-600" : "text-green-600"
            }`}
          >
            {status.text}
          </div>
        )}
      </form>
    </section>
  );
}
