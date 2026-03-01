/**
 * AnimatedBackground — light eco gradient mesh + ultra-subtle static depth.
 * Fixed behind all content; no distracting motion.
 */
export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Base light gradient */}
      <div className="absolute inset-0 bg-gradient-eco" />

      {/* Gentle mesh overlay for depth */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-[0.75]" />

      {/* Very light static grid for depth */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(14, 37, 64, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 37, 64, 0.08) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  );
}
