import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { StickyCta } from './StickyCta';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { AnimatedBackground } from './AnimatedBackground';

/**
 * Layout — wraps every page with animated background, header, footer, sticky CTA, WhatsApp.
 */
interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedBackground />
      <Header />
      <main id="main-content" className="flex-1 relative pb-16 lg:pb-0" role="main">
        {children}
      </main>
      <Footer />
      <StickyCta />
      <FloatingWhatsApp />
    </div>
  );
}
