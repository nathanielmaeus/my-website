import React from 'react';

let io;
const listeners = [];

function getIO(rootMargin = '-50px') {
  if (
    typeof io === 'undefined' &&
    typeof window !== 'undefined' &&
    window.IntersectionObserver
  ) {
    io = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          listeners.forEach(l => {
            if (l[0] === entry.target) {
              // Edge doesn't currently support isIntersecting
              if (entry.isIntersecting || entry.intersectionRatio > 0) {
                l[1](true);
              } else if (
                !entry.isIntersecting ||
                entry.intersectionRatio <= 0
              ) {
                l[1](false);
              }
            }
          });
        });
      },
      { rootMargin }
    );
  }

  return io;
}

const observeElement = (el, cb, rm) => {
  const io = getIO(rm);
  io.observe(el);
  listeners.push([el, cb]);
  return io;
};

export function useIntersectionObserver(ref, rootMargin) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [hasBeenVisible, setHasBeenVisible] = React.useState(false);
  const [, setIOSupported] = React.useState(false);

  React.useEffect(() => {
    const listenToIntersections = () => {
      io = observeElement(
        ref.current,
        isVisible => {
          if (!hasBeenVisible && isVisible) {
            setHasBeenVisible(true);
          }
          setIsVisible(isVisible);
        },
        rootMargin
      );
    };

    async function initIO() {
      let isVisible = true;
      let hasBeenVisible = true;
      let IOSupported = false;

      // Intersection Observer polyfill
      if (typeof window !== 'undefined' && !window.IntersectionObserver) {
        await import('intersection-observer').then(() => {
          // eslint-disable-next-line no-console
          console.log('IntersectionObserver polyfill injected.');
        });
      }

      if (typeof window !== 'undefined' && window.IntersectionObserver) {
        isVisible = false;
        hasBeenVisible = false;
        IOSupported = true;
      }

      setHasBeenVisible(hasBeenVisible);
      setIOSupported(IOSupported);
      setIsVisible(isVisible);

      listenToIntersections();
    }
    initIO();

    return () => io.disconnect();
  }, []);

  return [isVisible, hasBeenVisible];
}
