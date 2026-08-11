import { useForm, ValidationError } from "@formspree/react";
import { CheckCircle, Send } from "lucide-react";
import {
  personalInfo,
  socialLinks,
  mailtoLink,
} from "../data/portfolioData";
import FadeIn, { SectionHeader } from "./ui/primitives";

function ContactForm() {
  const [state, handleSubmit] = useForm(personalInfo.formspreeId);

  if (state.succeeded) {
    return (
      <div
        className="flex flex-col items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-6 py-10 text-center"
        role="status"
        aria-live="polite">
        <CheckCircle
          className="h-10 w-10 text-emerald-400"
          aria-hidden="true"
        />
        <p className="text-base font-medium text-zinc-100">
          Message sent successfully
        </p>
        <p className="text-sm text-muted-foreground">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-zinc-300">
          Email address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-white/[0.1] bg-white/[0.03] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 transition-colors focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50"
          placeholder="you@example.com"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-1.5 text-sm text-red-400"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-zinc-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-lg border border-white/[0.1] bg-white/[0.03] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 transition-colors focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50"
          placeholder="Tell me about your project..."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-1.5 text-sm text-red-400"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50">
        {state.submitting ? "Sending..." : "Send message"}
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding border-t border-white/[0.06]"
      aria-labelledby="contact-heading">
      <div className="mx-auto max-w-content">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              label="Contact"
              title="Let's build something great"
              description="I'm currently available for freelance projects and full-time opportunities. Let's discuss how we can work together."
            />

            <FadeIn className="space-y-6">
              <div className="card p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Status
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full bg-emerald-400"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-zinc-200">
                    {personalInfo.availability}
                  </p>
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Email
                </p>
                <a
                  href={mailtoLink}
                  className="text-sm text-zinc-200 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white/40">
                  {personalInfo.email}
                </a>
              </div>

              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Connect
                </p>
                <ul className="flex flex-wrap gap-2" role="list">
                  {socialLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tag transition-colors hover:border-white/[0.14] hover:text-zinc-200">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="card p-6 sm:p-8">
              <h3
                id="contact-heading"
                className="mb-6 text-lg font-medium text-zinc-100">
                Send a message
              </h3>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
