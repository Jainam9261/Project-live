import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { motion, useReducedMotion } from 'framer-motion';
import { ContactForm } from '@/components/sections/ContactForm';
import { staggerContainer, staggerItem } from '@/utils/motion';

/**
 * Contact — split layout; form + details; light premium; subtle animated background shape.
 */
export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Helmet>
        <title>Contact Us — Hexfn Limited</title>
        <meta name="description" content="Get in touch with Hexfn Limited. Request a quote, sample, or ask about our biodegradable cups and eco packaging." />
      </Helmet>
      <div className="relative py-16 md:py-20 lg:py-28 overflow-hidden">
        {/* Subtle background shape */}
        <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-hexfn-green-light/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="initial"
            animate={inView && !reduceMotion ? 'animate' : 'initial'}
            className="max-w-2xl"
          >
            <motion.h1
              variants={staggerItem}
              className="font-heading text-2xl font-bold text-hexfn-navy sm:text-3xl md:text-4xl accent-line inline-block"
            >
              Contact us
            </motion.h1>
            <motion.p variants={staggerItem} className="mt-4 sm:mt-6 text-hexfn-text text-base sm:text-lg leading-relaxed">
              Get a quote, request a sample, or ask about our products. We will get back to you shortly.
            </motion.p>
          </motion.div>

          <div className="mt-12 sm:mt-16 grid gap-8 sm:gap-12 grid-cols-1 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl sm:rounded-3xl bg-white border border-hexfn-green/5 p-5 sm:p-8 md:p-10 shadow-card"
            >
              <h2 className="font-heading text-lg font-semibold text-hexfn-navy sm:text-xl">Send a message</h2>
              <ContactForm />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-heading text-lg font-semibold text-hexfn-navy sm:text-xl">Contact details</h2>
              <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-hexfn-text text-base sm:text-lg">
                <p>Hexfn Limited</p>
                <p>Email: contact&#64;hexfn.com</p>
                <p>Use the form for quotes and samples.</p>
              </div>
              <h3 className="mt-8 sm:mt-10 font-heading text-base font-semibold text-hexfn-navy sm:text-lg">Map</h3>
              <div className="mt-3 sm:mt-4 aspect-video w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-hexfn-bg-warm border border-hexfn-green/10 flex items-center justify-center text-hexfn-text-muted text-sm sm:text-base">
                Add your map embed or address here.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
