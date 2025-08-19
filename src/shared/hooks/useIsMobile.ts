import React from "react";

/** true when width < 768px (Tailwind md) */
export function useIsMobile(breakPoint?:number): boolean {
  const [mobile, setMobile] = React.useState(
    typeof window !== "undefined" ? window.innerWidth < (breakPoint || 768) : true
  );
  React.useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const update = (e: MediaQueryListEvent | MediaQueryList) =>
      setMobile(!("matches" in e ? e.matches : (e as MediaQueryList).matches));
    update(mql);
    mql.addEventListener?.("change", update as (e: MediaQueryListEvent) => void);
    return () => mql.removeEventListener?.("change", update as any);
  }, []);
  return mobile;
}