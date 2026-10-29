import { useState, useRef, useEffect } from "react";
import usePageTitle from "../hooks/usePageTitle";
import useLocalStorage from "../hooks/useLocalStorage";
import SectionTitle from "../components/SectionTitle";
import { email } from "../data/content";

export default function Contact() {
  usePageTitle("Contact");
  const nameRef = useRef(null);
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useLocalStorage("draft-message", "");
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = {};
    if (!name.trim()) found.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(from)) found.email = "Enter a valid email address.";
    if (message.trim().length < 10) found.message = "Write at least 10 characters.";
    setErrors(found);

    if (Object.keys(found).length === 0) {
      setSent(true);
      setName("");
      setFrom("");
      setMessage("");
    }
  };

  const input =
    "mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 p-4 outline-none focus:border-blue-400";
  const error = "mt-1 text-left text-sm text-red-400";

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <SectionTitle center>Contact me</SectionTitle>
        <p className="mt-8 text-center text-slate-300">
          Write to me by email at{" "}
          <a href={`mailto:${email}`} className="break-all text-blue-400 hover:text-blue-300">
            {email}
          </a>{" "}
          or use the form below.
        </p>

        {sent && (
          <p role="status" className="mt-8 rounded-lg border border-blue-500 bg-blue-500/10 px-4 py-3 text-blue-200">
            Message sent. Thank you.
          </p>
        )}

        <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" ref={nameRef} value={name} onChange={(e) => setName(e.target.value)} className={input} />
            {errors.name && <p className={error}>{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email">Your email</label>
            <input id="email" type="email" value={from} onChange={(e) => setFrom(e.target.value)} className={input} />
            {errors.email && <p className={error}>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className={`${input} h-32`}
            />
            <p className="mt-1 text-left text-sm text-slate-400">Characters typed: {message.length}</p>
            {errors.message && <p className={error}>{errors.message}</p>}
          </div>
          <button type="submit" className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}