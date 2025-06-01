"use client";
import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";

// Remove spinner from NProgress
NProgress.configure({ showSpinner: false });

export default function NProgressProvider() {
  // Track if a form/button is submitting
  const submittingRef = useRef(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Listen for form submissions globally
  useEffect(() => {
    const onSubmit = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target?.tagName === "FORM" ||
        ((target instanceof HTMLButtonElement || target instanceof HTMLInputElement) && target.type === "submit")
      ) {
        submittingRef.current = true;
        NProgress.start();
        NProgress.set(0.4);
      }
    };
    window.addEventListener("submit", onSubmit, true);
    return () => window.removeEventListener("submit", onSubmit, true);
  }, []);

  // Complete NProgress on route change (after navigation)
  useEffect(() => {
    if (submittingRef.current) {
      NProgress.done();
      submittingRef.current = false;
    } else {
      NProgress.start();
      NProgress.set(0.4);
      setTimeout(() => NProgress.done(), 300);
    }
    // eslint-disable-next-line
  }, [pathname, searchParams]);

  return null;
}
