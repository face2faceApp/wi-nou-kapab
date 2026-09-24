"use client";

import Link from "next/link";
import { localizedPath, type Locale } from "@/i18n/routing";
import { useAppPathname } from "@/i18n/navigation";

export function LangSwitch({ locale }: { locale: Locale }) {
  const pathname = useAppPathname();

  return (
    <div className="lang-switch" aria-label="Language">
      <Link
        href={localizedPath("fr", pathname)}
        aria-current={locale === "fr" ? "true" : undefined}
      >
        FR
      </Link>
      <Link
        href={localizedPath("en", pathname)}
        aria-current={locale === "en" ? "true" : undefined}
      >
        EN
      </Link>
    </div>
  );
}
