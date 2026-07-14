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
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    const subject = encodeURIComponent(`Portfolio inbound from ${name || "—"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${from}`);
    window.location.href = `mailto:${portfolioData.socials.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-32 md:py-48">
      {/* Control-room glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 100%, rgba(0,229,255,0.1), transparent 70%), radial-gradient(35% 40% at 85% 20%, rgba(108,92,231,0.07), transparent 65%)",
        }}
      />
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">
                <span className="text-accent">007 — </span>Control room
              </p>
            </Reveal>
            <Reveal>
              <h2 className="font-sans text-display-xl font-medium tracking-tightest text-balance">
                Open a{" "}
                <span className="display-serif font-normal text-accent text-glow-cyan">
                  channel
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-bone/65 leading-relaxed">
                Open to backend / full-stack roles (remote-friendly), open-source
                collaboration, and conversations with people building serious
                fintech infrastructure. The terminal is listening.
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

              {/* The person on the other end of the channel */}
              <div className="hidden w-32 shrink-0 sm:block">
                <div className="relative overflow-hidden rounded-xl scanlines">
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
          </div>

          {/* Terminal form */}
          <Reveal delay={0.15}>
            <motion.form
              onSubmit={handleSubmit}
              className="holo relative overflow-hidden rounded-2xl scanlines"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Terminal title bar */}
              <div className="flex items-center justify-between border-b border-accent/10 px-5 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-magenta/60" />
                  <span className="size-2.5 rounded-full bg-copper/60" />
                  <span className="size-2.5 rounded-full bg-aurora/60" />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
                  transmission://imeobong.john
                </p>
                <span className="relative inline-flex size-2">
                  <span className="absolute inset-0 rounded-full bg-aurora" />
                  <span className="absolute inset-0 animate-ping rounded-full bg-aurora/60" />
                </span>
              </div>

              <div className="p-8">
                <p className="mb-6 font-mono text-[11px] text-bone/70">
                  <span className="text-accent">$</span> compose --to imeobong.john
                  <span className="ml-1 inline-block h-3 w-[7px] translate-y-[2px] bg-accent animate-pulse" />
                </p>

                <div className="space-y-5">
                  <Field
                    label="// your name"
                    value={name}
                    onChange={setName}
                    placeholder="Ada Lovelace"
                  />
                  <Field
                    label="// reply-to"
                    value={from}
                    onChange={setFrom}
                    placeholder="ada@founders.io"
                    type="email"
                  />
                  <Field
                    label="// payload"
                    value={message}
                    onChange={setMessage}
                    placeholder="Tell me what you're building."
                    textarea
                  />
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
                    {sent ? (
                      <span className="text-aurora">▸ transmission initialized</span>
                    ) : (
                      "routes via your mail client"
                    )}
                  </p>
                  <Button variant="primary">Send transmission</Button>
                </div>
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
    <div className="group flex items-baseline gap-4 border-b border-accent/10 py-3 transition-colors hover:border-accent/40">
      <span className="w-24 shrink-0 font-mono text-[10.5px] uppercase tracking-[0.18em] text-steel">
        {label}
      </span>
      <span className="text-bone/85 transition-colors group-hover:text-accent">{value}</span>
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
  const base =
    "w-full rounded-md border border-accent/15 bg-ink/60 px-4 py-3 font-mono text-sm text-bone placeholder:text-steel/50 transition-shadow duration-400 focus:border-accent/60 focus:outline-none focus:shadow-glow-cyan";
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent/70">
        {label}
      </span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={base}
        />
      )}
    </label>
  );
}
