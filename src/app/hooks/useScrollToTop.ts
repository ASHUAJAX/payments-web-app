
"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const useScrollToTop = () => {
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the pathname changes
  }, [pathname]); // Dependency on pathname
};

export default useScrollToTop;
