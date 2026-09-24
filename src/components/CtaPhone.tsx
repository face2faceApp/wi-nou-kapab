import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/contact";

export function CtaPhone({
  label,
  className = "btn btn-outline",
}: {
  label: string;
  className?: string;
}) {
  return (
    <a className={className} href={`tel:${PHONE_E164}`}>
      {label} · {PHONE_DISPLAY}
    </a>
  );
}
