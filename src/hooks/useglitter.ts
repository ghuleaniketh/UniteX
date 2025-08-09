import { useEffect, useState } from "react";

/**
 * Toggles a `no-glitter` class on the <html> element.
 * App's CSS will hide glitter when .no-glitter is present.
 */
export const useGlitter = () => {
  const [enabled, setEnabled] = useState<boolean>(() => {
    const v = localStorage.getItem("glitter");
    // default to true (enabled) if not set
    return v === null ? true : v === "true";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (enabled) root.classList.remove("no-glitter");
    else root.classList.add("no-glitter");

    localStorage.setItem("glitter", String(enabled));
  }, [enabled]);

  const toggleGlitter = () => setEnabled((s) => !s);

  return { enabled, toggleGlitter };
};
