import { ProgrammeSection } from "@/components/ProgrammeSection";
import { getPage } from "@/lib/content";
import { isLocale, type Locale } from "@/i18n/routing";
import type { PageSlug } from "../../content/types";
import { notFound } from "next/navigation";

const ANCHOR: Record<string, string> = {
  FORMER: "former",
  ORGANISER: "organiser",
  SERVIR: "servir",
  RECONSTRUIRE: "reconstruire",
  TRAIN: "former",
  ORGANIZE: "organiser",
  SERVE: "servir",
  REBUILD: "reconstruire",
};

export default async function ContentPage({
  params,
  slug,
}: {
  params: Promise<{ locale: string }>;
  slug: PageSlug;
}) {
  const { locale: loc } = await params;
  if (!isLocale(loc)) notFound();
  const locale = loc as Locale;
  const page = getPage(locale, slug);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{page.title}</h1>
          <p>{page.lead}</p>
        </div>
      </div>
      <article className="prose">
        <div className="container">
          {page.blocks.map((b, i) => (
            <ProgrammeSection
              key={i}
              heading={b.heading}
              body={b.body}
              id={b.heading ? ANCHOR[b.heading] : undefined}
            />
          ))}
        </div>
      </article>
    </>
  );
}
