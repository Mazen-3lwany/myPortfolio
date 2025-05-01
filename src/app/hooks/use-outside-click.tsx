import { useEffect } from "react";

// Type for the callback function
type Callback = (event: MouseEvent | TouchEvent) => void;

// The hook definition
export const useOutsideClick = (
  ref: React.RefObject<HTMLElement | null>, // Allow null for the ref
  callback: Callback // Define callback with MouseEvent or TouchEvent
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // DO NOTHING if the element being clicked is the target element or its children
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    // Listen for mouse and touch events
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Clean up listeners on unmount
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]); // Dependency array to re-run effect when ref or callback changes
};
