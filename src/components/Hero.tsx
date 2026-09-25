import Image from "next/image";
import { LocaleLink } from "@/i18n/navigation";
import { CtaWhatsApp } from "./CtaWhatsApp";

type Props = {
  brand: string;
  lead: string;
  contactLabel: string;
  whatsappLabel: string;
  imageSrc?: string;
};

export function Hero({
  brand,
  lead,
  contactLabel,
  whatsappLabel,
  imageSrc = "/hero.jpg",
}: Props) {
  return (
    <section className="hero">
      <div className="hero-media">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "58% 18%" }}
        />
        <div className="hero-shade" />
      </div>
      <div className="container">
        <div className="hero-content">
        <h1 className="hero-brand">{brand}</h1>
        <p className="hero-lead">{lead}</p>
        <div className="hero-ctas">
          <CtaWhatsApp label={whatsappLabel} />
          <LocaleLink href="/contact" className="btn btn-ghost">
            {contactLabel}
          </LocaleLink>
        </div>
        </div>
      </div>
    </section>
  );
}
