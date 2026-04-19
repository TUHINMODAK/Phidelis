import React, { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const GlobalLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useGSAP(() => {
    const loaderEl = document.getElementById('global-loader');
    const progressEl = document.getElementById('progress-bar');
    
    if (!loaderEl || !progressEl) return;

    // Start progress bar animation
    gsap.to(progressEl, {
      width: "90%",
      duration: 5,
      ease: "power1.inOut"
    });

    let hasFinished = false;

    const finishLoading = () => {
      if (hasFinished) return;
      hasFinished = true;

      const tl = gsap.timeline({
        onComplete: () => {
          setIsLoading(false);
          // Remove the loader from DOM completely since it's a one-time global loader
          loaderEl.remove();
        }
      });

      // Rapidly complete the progress bar
      tl.to(progressEl, {
        width: "100%",
        duration: 0.4,
        ease: "power2.out",
        overwrite: true
      })
      // Then slide the loader up
      .to(loaderEl, {
        yPercent: -100,
        duration: 0.8,
        ease: "power3.inOut"
      }, "+=0.2");
    };

    // Timeout of 5 seconds to force finish
    const maxTimer = setTimeout(() => {
      finishLoading();
    }, 5000);

    const handleLoad = () => {
      // Small delay just to ensure the UI paints properly
      setTimeout(() => {
        finishLoading();
      }, 500);
    };

    if (document.readyState === 'complete') {
      setTimeout(() => {
        finishLoading();
      }, 500);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(maxTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // Return null because the markup is now directly in index.html
  return null;
};

export default GlobalLoader;
