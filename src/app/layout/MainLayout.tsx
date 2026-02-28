import type { ReactNode } from 'react';
import { Header, Footer } from '@/components/navigation';
import { StickyCta } from '@/components/ui/StickyCta';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';

/**
 * MainLayout — app shell: background, header, main, footer, sticky CTA, WhatsApp.
 * Applied once per route via router.
 */
interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
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
