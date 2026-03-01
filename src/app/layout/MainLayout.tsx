import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Header, Footer } from '@/components/navigation';
import { StickyCta } from '@/components/ui/StickyCta';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { useState, useEffect } from 'react';

/**
 * MainLayout — app shell: background, header, main, footer, sticky CTA, WhatsApp.
 * Applied once per route via router.
 */
interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedBackground />
      <Header mobileMenuOpen={mobileMenuOpen} onMobileMenuOpenChange={setMobileMenuOpen} />
      <main id="main-content" className="flex-1 relative pb-16 lg:pb-0" role="main">
        {children}
      </main>
      <Footer />
      <StickyCta />
      {!mobileMenuOpen && <FloatingWhatsApp />}
    </div>
  );
}
