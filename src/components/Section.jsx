export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-20">
      <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
      <span className="mt-3 block h-1 w-12 rounded-full bg-accent" aria-hidden="true" />
      {intro && <p className="mt-5 max-w-2xl text-muted">{intro}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function Chip({ children }) {
  return <span className="ui rounded-md border border-line bg-surface px-2.5 py-1 text-sm">{children}</span>;
}
