"use client";

import Image from "next/image";
import { LocaleLink } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { Messages } from "@/i18n/messages";
import { CtaWhatsApp } from "./CtaWhatsApp";
import { LangSwitch } from "./LangSwitch";

const navKeys = [
  ["/", "home"],
  ["/programme", "programme"],
  ["/actions", "actions"],
  ["/economie", "economie"],
  ["/solidarite", "solidarite"],
  ["/contact", "contact"],
] as const;

export function Header({ locale, messages }: { locale: Locale; messages: Messages }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <LocaleLink href="/" className="brand">
          <Image src="/logo-crest.jpg" alt="" width={40} height={40} priority />
          <span>WI NOU KAPAB</span>
        </LocaleLink>
        <nav className="nav-main" aria-label="Main">
          {navKeys.map(([href, key]) => (
            <LocaleLink key={href} href={href}>
              {messages.nav[key]}
            </LocaleLink>
          ))}
        </nav>
        <div className="header-actions">
          <LangSwitch locale={locale} />
          <CtaWhatsApp label={messages.cta.whatsapp} />
        </div>
      </div>
    </header>
  );
}
