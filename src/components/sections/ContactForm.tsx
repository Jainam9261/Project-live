import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { duration } from '@/constants/design';

/**
 * ContactForm — light theme; success/error with smooth animation.
 */
export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xjvnqkzw"
      method="POST"
      className="space-y-5 sm:space-y-6 mt-4 sm:mt-6"
      aria-label="Contact form"
    >
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-hexfn-navy mb-1">
          Name <span className="text-hexfn-cta">*</span>
        </label>
        <Input
          id="contact-name"
          type="text"
          name="name"
          required
          autoComplete="name"
          placeholder="Your name"
          aria-required
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-hexfn-navy mb-1">
          Email <span className="text-hexfn-cta">*</span>
        </label>
        <Input
          id="contact-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          aria-required
        />
      </div>
      <div>
        <label htmlFor="contact-company" className="block text-sm font-medium text-hexfn-navy mb-1">
          Company
        </label>
        <Input
          id="contact-company"
          type="text"
          name="company"
          autoComplete="organization"
          placeholder="Company (optional)"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-hexfn-navy mb-1">
          Message <span className="text-hexfn-cta">*</span>
        </label>
        <Textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Your message"
          aria-required
        />
      </div>
      <div role="alert" aria-live="polite">
        <AnimatePresence mode="wait">
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: duration.fast }}
              className="rounded-2xl bg-hexfn-green-muted p-4 text-hexfn-green font-medium"
            >
              Thank you. We will get back to you soon.
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: duration.fast }}
              className="rounded-2xl bg-red-50 p-4 text-red-700 font-medium"
            >
              Something went wrong. Please try again or email us directly.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Button
        type="submit"
        disabled={status === 'sending'}
        className="w-full min-h-[48px] text-base py-3.5"
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </Button>
    </form>
  );
}
