import { LocaleLink } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { Messages } from "@/i18n/messages";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_E164, WHATSAPP_URL } from "@/lib/contact";

const explore = [
  ["/programme", "programme"],
  ["/contexte", "contexte"],
  ["/vision", "vision"],
  ["/actions", "actions"],
  ["/economie", "economie"],
  ["/citoyennete", "citoyennete"],
  ["/solidarite", "solidarite"],
  ["/partenariats", "partenariats"],
  ["/mise-en-oeuvre", "mise-en-oeuvre"],
] as const;

const labels: Record<string, { fr: string; en: string }> = {
  programme: { fr: "Programme", en: "Program" },
  contexte: { fr: "Contexte", en: "Context" },
  vision: { fr: "Vision", en: "Vision" },
  actions: { fr: "Actions", en: "Actions" },
  economie: { fr: "Économie", en: "Economy" },
  citoyennete: { fr: "Citoyenneté", en: "Citizenship" },
  solidarite: { fr: "Solidarité", en: "Solidarity" },
  partenariats: { fr: "Partenariats", en: "Partnerships" },
  "mise-en-oeuvre": { fr: "Mise en œuvre", en: "Implementation" },
};

export function Footer({ locale, messages }: { locale: Locale; messages: Messages }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>WI NOU KAPAB</h3>
          <p>{messages.footer.rights}</p>
        </div>
        <div>
          <h3>{messages.footer.explore}</h3>
          <div className="footer-links">
            {explore.map(([href, key]) => (
              <LocaleLink key={href} href={href}>
                {labels[key][locale]}
              </LocaleLink>
            ))}
          </div>
        </div>
        <div>
          <h3>{messages.footer.connect}</h3>
          <div className="footer-links">
            <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span>{ADDRESS}</span>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>NAP AVANSE ANSANM — WI NOU KAPAB</p>
      </div>
    </footer>
  );
}
