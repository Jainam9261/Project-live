import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation, useRoutes } from 'react-router-dom';
import { routes } from '@/app/router';
import { useScrollToTop } from '@/hooks';

/**
 * App root — defines routes and page transitions via AnimatePresence.
 */
function App() {
  useScrollToTop();
  const location = useLocation();
  const element = useRoutes(routes);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <AnimatePresence mode="wait">
        {element ? React.cloneElement(element, { key: location.pathname }) : null}
      </AnimatePresence>
    </>
  );
}

export default App;
