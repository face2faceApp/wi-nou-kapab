"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localizedPath, stripLocale, type Locale } from "./routing";

export function useLocaleFromPath(): Locale {
  const pathname = usePathname() || "/";
  const seg = pathname.split("/")[1];
  return seg === "en" ? "en" : "fr";
}

export function LocaleLink({
  href,
  locale,
  children,
  className,
  ...rest
}: {
  href: string;
  locale?: Locale;
  children: React.ReactNode;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const current = useLocaleFromPath();
  const loc = locale ?? current;
  return (
    <Link href={localizedPath(loc, href)} className={className} {...rest}>
      {children}
    </Link>
  );
}

export function useAppPathname(): string {
  return stripLocale(usePathname() || "/");
}
