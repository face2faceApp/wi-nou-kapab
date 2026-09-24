export function ProgrammeSection({
  heading,
  body,
  id,
}: {
  heading?: string;
  body: string[];
  id?: string;
}) {
  return (
    <section id={id}>
      {heading ? <h2>{heading}</h2> : null}
      {body.map((p) => (
        <p key={p.slice(0, 48)}>{p}</p>
      ))}
    </section>
  );
}
