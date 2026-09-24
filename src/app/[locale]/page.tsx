import { Hero } from "@/components/Hero";
import { PillarGrid } from "@/components/PillarGrid";
import { LocaleLink } from "@/i18n/navigation";
import { getMessages } from "@/i18n/messages";
import { isLocale, type Locale } from "@/i18n/routing";
import { getPage, getPillars } from "@/lib/content";
import { notFound } from "next/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: loc } = await params;
  if (!isLocale(loc)) notFound();
  const locale = loc as Locale;
  const page = getPage(locale, "home");
  const pillars = getPillars(locale);
  const messages = getMessages(locale);

  return (
    <>
      <Hero
        brand={page.title}
        lead={page.lead}
        contactLabel={messages.cta.contact}
        whatsappLabel={messages.cta.whatsapp}
      />
      <PillarGrid
        pillars={pillars}
        title={locale === "fr" ? "Quatre grandes actions" : "Four pillars"}
        intro={
          locale === "fr"
            ? "Former, organiser, servir et reconstruire — la base du programme 2026–2027."
            : "Train, organize, serve, and rebuild — the core of the 2026–2027 program."
        }
      />
      <section className="prose">
        <div className="container">
          <h2>{page.blocks[0]?.heading}</h2>
          {page.blocks[0]?.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p>
            <LocaleLink href="/programme" className="btn btn-primary">
              {locale === "fr" ? "Lire le programme" : "Read the program"}
            </LocaleLink>
          </p>
        </div>
      </section>
    </>
  );
}
