import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { MainLayout } from '@/app/layout';
import { PageTransition } from '@/components/ui/PageTransition';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Products = lazy(() => import('@/pages/Products'));
const ImportExport = lazy(() => import('@/pages/ImportExport'));
const Sustainability = lazy(() => import('@/pages/Sustainability'));
const Certifications = lazy(() => import('@/pages/Certifications'));
const CustomBranding = lazy(() => import('@/pages/CustomBranding'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogArticle = lazy(() => import('@/pages/BlogArticle'));
const Contact = lazy(() => import('@/pages/Contact'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const Terms = lazy(() => import('@/pages/Terms'));

const fallback = (
  <div className="min-h-screen flex items-center justify-center text-slate-300" aria-live="polite">
    <span className="animate-pulse">Loading…</span>
  </div>
);

function withLayout(Component: React.LazyExoticComponent<React.ComponentType<object>>) {
  return (
    <MainLayout>
      <Suspense fallback={fallback}>
        <PageTransition>
          <Component />
        </PageTransition>
      </Suspense>
    </MainLayout>
  );
}

export const routes = [
  { path: '/', element: withLayout(Home) },
  { path: '/about', element: withLayout(About) },
  { path: '/products', element: withLayout(Products) },
  { path: '/import-export', element: withLayout(ImportExport) },
  { path: '/sustainability', element: withLayout(Sustainability) },
  { path: '/certifications', element: withLayout(Certifications) },
  { path: '/custom-branding', element: withLayout(CustomBranding) },
  { path: '/blog', element: withLayout(Blog) },
  { path: '/blog/:slug', element: withLayout(BlogArticle) },
  { path: '/contact', element: withLayout(Contact) },
  { path: '/privacy', element: withLayout(Privacy) },
  { path: '/terms', element: withLayout(Terms) },
  { path: '*', element: <Navigate to="/" replace /> },
];
