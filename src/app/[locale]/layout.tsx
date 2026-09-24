import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getMessages } from "@/i18n/messages";
import { isLocale, locales, type Locale } from "@/i18n/routing";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: loc } = await params;
  if (!isLocale(loc)) notFound();
  const locale = loc as Locale;
  const messages = getMessages(locale);

  return (
    <>
      <Header locale={locale} messages={messages} />
      <main className="site-main">{children}</main>
      <Footer locale={locale} messages={messages} />
    </>
  );
}
