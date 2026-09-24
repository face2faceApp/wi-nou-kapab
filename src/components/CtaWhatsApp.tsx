import { WHATSAPP_URL } from "@/lib/contact";

export function CtaWhatsApp({
  label,
  className = "btn btn-whatsapp",
}: {
  label: string;
  className?: string;
}) {
  return (
    <a className={className} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}
