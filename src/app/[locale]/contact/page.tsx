import { ContactForm } from "@/components/ContactForm";
import { CtaWhatsApp } from "@/components/CtaWhatsApp";
import { CtaPhone } from "@/components/CtaPhone";
import { PageHero } from "@/components/PageHero";
import { getPage } from "@/lib/content";
import { getMessages } from "@/i18n/messages";
import { isLocale, type Locale } from "@/i18n/routing";
import { ADDRESS, EMAIL } from "@/lib/contact";
import { notFound } from "next/navigation";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: loc } = await params;
  if (!isLocale(loc)) notFound();
  const locale = loc as Locale;
  const page = getPage(locale, "contact");
  const messages = getMessages(locale);

  return (
    <>
      <PageHero page={page} locale={locale} />
      <div className="container contact-grid">
        <div>
          <ContactForm labels={messages.form} />
        </div>
        <div className="contact-meta">
          <p>
            <CtaWhatsApp label={messages.cta.whatsapp} />
          </p>
          <p>
            <CtaPhone label={messages.cta.call} />
          </p>
          <p>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
          <p>{ADDRESS}</p>
        </div>
      </div>
    </>
  );
}
