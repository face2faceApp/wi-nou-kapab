import Image from "next/image";
import { getMessages } from "@/i18n/messages";
import type { Locale } from "@/i18n/routing";
import type { PageContent } from "../../content/types";

export function PageHero({ page, locale }: { page: PageContent; locale: Locale }) {
  return (
    <div className="page-hero">
      <div className="hero-media">
        <Image src={`/banners/${page.slug}.jpg`} alt="" fill preload sizes="100vw" />
        <div className="hero-shade" />
      </div>
      <div className="container">
        <h1>{page.title}</h1>
        <p>{page.lead}</p>
      </div>
      <small className="page-hero-note">{getMessages(locale).media.aiImage}</small>
    </div>
  );
}
