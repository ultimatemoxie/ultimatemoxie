"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
];

const whatsappUrl = "https://wa.me/2347042652606?text=Hi%20Moxie%2C%20I%20came%20across%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project%2Fopportunity%20with%20you.";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Ultimate Moxie home">ULTIMATE MOXIE<span>®</span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link) => <Link key={link.label} className={pathname === link.href ? "active" : ""} href={link.href}>{link.label}</Link>)}
      </nav>
      <a className="pill pill-light desktop-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Contact Ultimate Moxie on WhatsApp">Let&apos;s Talk <ArrowUpRight size={17} /></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => <Link onClick={() => setOpen(false)} key={link.label} href={link.href}>{link.label}<ArrowUpRight size={18} /></Link>)}
          <a onClick={() => setOpen(false)} href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Contact Ultimate Moxie on WhatsApp">Let&apos;s Talk<ArrowUpRight size={18} /></a>
        </nav>
      )}
    </header>
  );
}
