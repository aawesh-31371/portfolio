"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/certificates", label: "Certificates" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath === "/") {
      setActive("Home");
    } else if (currentPath === "/about") {
      setActive("About");
    } else if (currentPath === "/projects") {
      setActive("Projects");
    } else if (currentPath === "/experience") {
      setActive("Experience");
    } else if (currentPath === "/certificates") {
      setActive("Certificates");
    } else if (currentPath === "/contact") {
      setActive("Contact");
    }
  }, []);

  return (
    <header className="navbar">
      <Link href="/" className="brand">
        <span>AK</span>
        Aawesh
      </Link>

      <nav>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={active === link.label ? "active" : ""}
            onClick={() => setActive(link.label)}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <ThemeToggle />
    </header>
  );
}