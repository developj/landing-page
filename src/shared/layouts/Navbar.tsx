import React from "react";
import classNameMerge from "../utils/classNameMerge";
import { CartIcon } from "../icons/CartIcon";
import { UserIcon } from "../icons/UserIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { CloseIcon } from "../icons/CloseIcon";
import { MenuIcon } from "../icons/MenuIcon";
import { useCart } from "../hooks/useCart";

const LINKS = [
  { label: "SS", href: "#" },
  { label: "FW", href: "#" },
  { label: "PANTS", href: "#" },
  { label: "T-Shirt", href: "#" },
  { label: "SALE", href: "#" },
  { label: "COLLECTION", href: "#" },
  { label: "COMMUNITY", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  // 🔢 total items in cart (sum of qty)
  const itemCount = useCart((s) => s.items.reduce((n, it) => n + it.qty, 0));

  // Lock scroll when mobile menu is open
  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const cartButton = (
    <a
      href="/login"
      aria-label="Cart"
      className={classNameMerge(
        "hover:text-[var(--brand)] inline-block align-middle",
        itemCount > 0 && "text-[var(--brand)]"
      )}
    >
      <span className="relative inline-block">
        <CartIcon />
        {itemCount > 0 && (
          <span className="absolute top-0 left-4 translate-x-1/3 -translate-y-1/3 font-semibold text-sm leading-none pointer-events-none text-[var(--brand)]">
            {itemCount}
          </span>
        )}
      </span>
    </a>
  );

  return (
    <header className="sticky top-0 z-40 w-full bg-black text-white">
      <nav className="mx-auto max-w-7xl px-6">
        {/* BAR */}
        <div className="flex h-14 items-center justify-between">
          {/* Left: Brand */}
          <a
            href="/"
            className="text-2xl font-extrabold tracking-wide text-[var(--brand)] mr-3"
          >
            LANDAS
          </a>

          {/* Center: links (desktop) */}
          <ul className="hidden flex-1 items-center justify-evenly gap-8 md:flex">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm font-semibold uppercase tracking-wide hover:text-[var(--brand)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: icons */}
          <div className="flex items-center gap-4">
            {/* Desktop icons */}
            <div className="hidden items-center gap-4 md:flex">
              {cartButton}

              <a
                href="/login"
                aria-label="Account"
                className="hover:text-[var(--brand)]"
              >
                <UserIcon />
              </a>
              <button aria-label="Search" className="hover:text-[var(--brand)]">
                <SearchIcon />
              </button>
              <a href="/login" className="text-sm">
                로그아웃
              </a>
            </div>

            {/* Mobile icons */}
            <div className="flex items-center gap-4 md:hidden">
              {cartButton}

              <button aria-label="Search" className="hover:text-[var(--brand)]">
                <SearchIcon />
              </button>
              <button
                className="hover:text-[var(--brand)]"
                onClick={() => setOpen((s) => !s)}
                aria-label="Toggle menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE PANEL */}
        <div
          id="mobile-menu"
          className={classNameMerge(
            "md:hidden transition-[max-height] overflow-hidden",
            open ? "max-h-[80vh]" : "max-h-0"
          )}
        >
          <div className="border-t border-white/10 py-2">
            <ul className="flex flex-col">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="block px-1 py-3 text-base font-semibold uppercase tracking-wide hover:text-[var(--brand)]"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-2 flex items-center justify-between px-1 pb-4">
              <div className="flex items-center gap-4">
                {cartButton}

                <a
                  href="/login"
                  className="hover:text-[var(--brand)]"
                  aria-label="Account"
                >
                  <UserIcon />
                </a>
                <button
                  className="hover:text-[var(--brand)]"
                  aria-label="Search"
                >
                  <SearchIcon />
                </button>
              </div>
              <a href="/login" className="text-sm">
                로그아웃
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
