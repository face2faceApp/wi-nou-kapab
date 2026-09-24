import { LocaleLink } from "@/i18n/navigation";
import type { Pillar } from "../../content/types";

export function PillarGrid({
  pillars,
  title,
  intro,
}: {
  pillars: Pillar[];
  title: string;
  intro: string;
}) {
  return (
    <section className="pillars">
      <div className="container">
        <h2>{title}</h2>
        <p className="pillars-intro">{intro}</p>
        <ul className="pillar-list">
          {pillars.map((p) => (
            <li key={p.id}>
              <LocaleLink href={`/actions#${p.id}`}>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
              </LocaleLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
