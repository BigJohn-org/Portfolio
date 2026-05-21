"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { media } from "@/data/media";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import Cinematic from "@/components/ui/Cinematic";

export default function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inbound from ${name || "—"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${from}`
    );
    window.location.href = `mailto:${portfolioData.socials.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden py-32 md:py-48">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 100%, rgba(255,91,46,0.12), transparent 70%)",
        }}
      />
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">
                <span className="text-accent">006 — </span>Contact
              </p>
            </Reveal>
            <Reveal>
              <h2 className="font-sans text-display-xl font-medium tracking-tightest text-balance">
                Say{" "}
                <span className="display-serif font-normal text-accent">
                  hi
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-bone/65 leading-relaxed">
                Open to software engineering roles (remote-friendly), open-source
                collaboration, and conversations with people building thoughtful
                things. Drop a line.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 items-end gap-8 sm:grid-cols-[1fr_auto]">
              <div className="space-y-4">
                <ContactLine
                  label="Email"
                  value={portfolioData.socials.email}
                  href={`mailto:${portfolioData.socials.email}`}
                />
                <ContactLine
                  label="GitHub"
                  value={portfolioData.socials.github.handle ?? ""}
                  href={portfolioData.socials.github.url}
                />
                <ContactLine
                  label="LinkedIn"
                  value={portfolioData.socials.linkedin.url.replace(/https?:\/\//, "")}
                  href={portfolioData.socials.linkedin.url}
                />
                <ContactLine
                  label="Location"
                  value={`${portfolioData.personal.location} · WAT (UTC+1)`}
                />
              </div>

              {/* Small cinematic accent — the "person you're emailing" */}
              <div className="hidden w-32 shrink-0 sm:block">
                <Cinematic
                  src={media.contact.src}
                  kind={media.contact.kind}
                  alt={media.contact.alt}
                  tone={media.contact.tone}
                  aspect={media.contact.aspect}
                  parallax={media.contact.parallax}
                  rounded="rounded-xl"
                  grainOpacity={0.3}
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <Reveal delay={0.15}>
            <motion.form
              onSubmit={handleSubmit}
              className="glass-strong rounded-2xl p-8"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="eyebrow mb-6">Direct message</p>

              <div className="space-y-5">
                <Field
                  label="Your name"
                  value={name}
                  onChange={setName}
                  placeholder="Ada Lovelace"
                />
                <Field
                  label="Reply-to"
                  value={from}
                  onChange={setFrom}
                  placeholder="ada@founders.io"
                  type="email"
                />
                <Field
                  label="Message"
                  value={message}
                  onChange={setMessage}
                  placeholder="Tell me what you're building."
                  textarea
                />
              </div>

              <div className="mt-8 flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
                  opens your mail client
                </p>
                <Button variant="primary">Send transmission</Button>
              </div>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactLine({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="group flex items-baseline gap-4 border-b border-bone/10 py-3 transition-colors hover:border-bone/30">
      <span className="w-24 shrink-0 font-mono text-[10.5px] uppercase tracking-[0.18em] text-steel">
        {label}
      </span>
      <span className="text-bone/85 group-hover:text-bone">{value}</span>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  textarea,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  textarea?: boolean;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10.5px] uppercase tracking-[0.18em] text-steel">
        {label}
      </span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          className="w-full resize-none rounded-md border border-bone/10 bg-ink/40 px-4 py-3 text-bone placeholder:text-steel/60 focus:border-accent/50 focus:outline-none"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-md border border-bone/10 bg-ink/40 px-4 py-3 text-bone placeholder:text-steel/60 focus:border-accent/50 focus:outline-none"
        />
      )}
    </label>
  );
}
