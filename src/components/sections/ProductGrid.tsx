import { useState, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useReducedMotion } from 'framer-motion';
import { products } from '@/data/products';
import { Card } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { getWhatsAppUrlForProduct } from '@/constants/site';
import type { Product } from '@/types';
import { staggerContainer, staggerItem } from '@/utils/motion';

/**
 * ProductCard — single product in grid; hover zoom + parallax tilt feel; opens modal on click.
 */
interface ProductCardProps {
  product: Product;
  onSelect: (p: Product) => void;
  index: number;
  inView: boolean;
  reduceMotion: boolean | null;
}

function ProductCard({ product, onSelect, index, inView, reduceMotion }: ProductCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      initial="initial"
      animate={inView && !reduceMotion ? 'animate' : 'initial'}
      transition={{ delay: index * 0.05 }}
    >
      <Card hover>
        <button
          type="button"
          className="text-left w-full"
          onClick={() => onSelect(product)}
          aria-label={`View details for ${product.name}`}
        >
          <div className="aspect-square overflow-hidden rounded-2xl bg-hexfn-green-muted group">
            <motion.img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600';
              }}
            />
          </div>
          <h3 className="mt-5 font-heading text-lg font-semibold text-hexfn-navy">{product.name}</h3>
          <p className="mt-1 text-sm text-hexfn-text-muted">
            {product.size} · {product.liningType}
            {product.customBranding && ' · Custom branding'}
          </p>
          <p className="mt-2 text-sm text-hexfn-text line-clamp-2">{product.description}</p>
          <span className="mt-4 inline-block text-sm font-medium text-hexfn-green">View details →</span>
        </button>
      </Card>
    </motion.div>
  );
}

const sizeFilters = ['All', '4oz', '8oz', '12oz', '16oz'];
const liningFilters = ['All', 'PLA', 'water-based'];

/**
 * ProductGrid — filter chips (animated), grid, detail modal with Add to Quote.
 */
export function ProductGrid() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const reduceMotion = useReducedMotion();
  const [sizeFilter, setSizeFilter] = useState('All');
  const [liningFilter, setLiningFilter] = useState('All');
  const [customOnly, setCustomOnly] = useState(false);
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (sizeFilter !== 'All' && p.size !== sizeFilter) return false;
      if (liningFilter !== 'All' && p.liningType !== liningFilter) return false;
      if (customOnly && !p.customBranding) return false;
      return true;
    });
  }, [sizeFilter, liningFilter, customOnly]);

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <span className="text-sm font-medium text-hexfn-text w-full sm:w-auto">Size:</span>
        {sizeFilters.map((s) => (
          <motion.button
            key={s}
            type="button"
            onClick={() => setSizeFilter(s)}
            className={`rounded-2xl px-4 py-2.5 min-h-[44px] text-sm font-medium transition-all duration-300 flex items-center ${
              sizeFilter === s
                ? 'bg-hexfn-cta text-white shadow-cta-glow'
                : 'bg-white border border-hexfn-green/20 text-hexfn-text hover:border-hexfn-green hover:bg-hexfn-green-muted'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {s}
          </motion.button>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3">
        <span className="text-sm font-medium text-hexfn-text w-full sm:w-auto">Lining:</span>
        {liningFilters.map((l) => (
          <motion.button
            key={l}
            type="button"
            onClick={() => setLiningFilter(l)}
            className={`rounded-2xl px-4 py-2.5 min-h-[44px] text-sm font-medium transition-all duration-300 flex items-center ${
              liningFilter === l
                ? 'bg-hexfn-cta text-white shadow-cta-glow'
                : 'bg-white border border-hexfn-green/20 text-hexfn-text hover:border-hexfn-green hover:bg-hexfn-green-muted'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {l}
          </motion.button>
        ))}
      </div>
      <label className="flex items-center gap-2 cursor-pointer mt-4 min-h-[44px]">
        <input
          type="checkbox"
          checked={customOnly}
          onChange={(e) => setCustomOnly(e.target.checked)}
          className="rounded border-hexfn-green/30 text-hexfn-green focus:ring-hexfn-green"
        />
        <span className="text-sm text-hexfn-text">Custom branding only</span>
      </label>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
        className="mt-8 sm:mt-10 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {filtered.map((p, i) => (
          <ProductCard
            key={p.id}
            product={p}
            onSelect={setSelected}
            index={i}
            inView={inView}
            reduceMotion={reduceMotion}
          />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-hexfn-text-muted">No products match your filters. Try adjusting them.</p>
      )}

      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected ? selected.name : undefined}
        aria-label="Product details"
      >
        {selected && (
          <div className="flex flex-col md:flex-row md:min-h-0">
            <div className="relative flex-shrink-0 w-full md:w-[45%] lg:w-[42%] md:min-h-[280px]">
              <div className="aspect-square md:aspect-auto md:absolute md:inset-0 md:h-full w-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl md:rounded-l-2xl md:rounded-tr-none bg-hexfn-green-muted/50">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600';
                  }}
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-7 lg:p-8">
              <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                <span className="inline-flex items-center rounded-full bg-hexfn-green/12 px-3 py-1 text-xs font-semibold text-hexfn-green">
                  {selected.size}
                </span>
                <span className="inline-flex items-center rounded-full bg-hexfn-green/12 px-3 py-1 text-xs font-semibold text-hexfn-green">
                  {selected.liningType}
                </span>
                {selected.customBranding && (
                  <span className="inline-flex items-center rounded-full bg-hexfn-cta/15 px-3 py-1 text-xs font-semibold text-hexfn-cta">
                    Custom branding
                  </span>
                )}
              </div>
              <h2 className="mt-3 font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-hexfn-navy tracking-tight">
                {selected.name}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-hexfn-text leading-relaxed">
                {selected.description}
              </p>
              {selected.sizes && selected.sizes.length > 0 && (
                <p className="mt-3 text-sm text-hexfn-text-muted">
                  <span className="font-medium text-hexfn-navy">Sizes:</span> {selected.sizes.join(', ')}
                </p>
              )}
              <div className="mt-6 sm:mt-8 pt-5 border-t border-hexfn-green/10 flex flex-col-reverse sm:flex-row sm:items-center gap-3">
                <Button
                  variant="outline"
                  onClick={() => setSelected(null)}
                  className="sm:order-last"
                >
                  Close
                </Button>
                <a
                  href={getWhatsAppUrlForProduct(selected.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-hexfn-cta px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:shadow-cta-glow focus:outline-none focus:ring-2 focus:ring-hexfn-cta focus:ring-offset-2 transition-all duration-200 hover:brightness-105 active:scale-[0.98]"
                  aria-label={`Get quote on WhatsApp for ${selected.name}`}
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg bg-white/20" aria-hidden>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <span>Request quote via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
