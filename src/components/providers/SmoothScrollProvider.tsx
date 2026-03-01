import { useEffect, useRef, type ReactNode } from 'react';

/**
 * SmoothScrollProvider — initializes Lenis smooth scroll and syncs with RAF.
 * Wraps the app so all pages get buttery smooth scrolling.
 */
interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    const init = async () => {
      const Lenis = (await import('@studio-freight/lenis')).default;
      lenis = new Lenis({
        lerp: 0.16,
        smoothWheel: true,
      });
      function raf(time: number) {
        lenis?.raf(time);
        rafRef.current = requestAnimationFrame(raf);
      }
      rafRef.current = requestAnimationFrame(raf);
    };
    init();
    return () => {
      cancelAnimationFrame(rafRef.current);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
