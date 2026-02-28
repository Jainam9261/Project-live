import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion, useReducedMotion } from 'framer-motion';
import { products } from '@/data/products';
import { Card } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
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
          <div className="p-6">
            <div className="aspect-square overflow-hidden rounded-2xl bg-hexfn-green-muted">
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
            <h2 className="mt-5 font-heading text-2xl font-bold text-hexfn-navy">{selected.name}</h2>
            <p className="mt-1 text-hexfn-text-muted">
              {selected.size} · {selected.liningType}
              {selected.customBranding && ' · Custom branding available'}
            </p>
            <p className="mt-4 text-hexfn-text">{selected.description}</p>
            {selected.sizes && selected.sizes.length > 0 && (
              <p className="mt-2 text-sm text-hexfn-text">Sizes: {selected.sizes.join(', ')}</p>
            )}
            <div className="mt-6 flex gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-hexfn-cta px-4 py-2.5 text-sm font-semibold text-white shadow-soft hover:shadow-cta-glow"
              >
                Add to quote
              </Link>
              <Button variant="outline" onClick={() => setSelected(null)}>
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
