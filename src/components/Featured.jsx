import Section, { Chip } from "./Section";
import Links from "./Links";
import { featured } from "../data/featured";

function Flow({ cols, links, note }) {
  const tpl = cols.map((_, i) => (i ? "auto 1fr" : "1fr")).join(" ");
  const box = "ui rounded-md border border-line bg-surface px-3 py-2 text-center text-sm";
  return (
    <figure className="mt-6 rounded-lg border border-line bg-bg p-4" aria-label="Project architecture">
      <div className="grid gap-3 sm:items-center sm:[grid-template-columns:var(--cols)]" style={{ "--cols": tpl }}>
        {cols.map((col, i) => (
          <div key={i} className="contents">
            {i > 0 && <span className="ui text-center text-sm text-muted">{links[i - 1]}</span>}
            <div className="space-y-2">
              {col.map((c, j) => <div key={c} className={`${box} ${j === 0 ? "border-accent font-semibold" : ""}`}>{c}</div>)}
            </div>
          </div>
        ))}
      </div>
      {note && <p className="ui mt-3 text-center text-sm text-muted">{note}</p>}
    </figure>
  );
}

export default function Featured() {
  const big = featured.filter((p) => p.flow);
  const rest = featured.filter((p) => !p.flow);
  return (
    <Section id="projects" title="Projects" intro="The projects that show how I handle real application problems: data fetching, routing, authentication and permissions, and how I work in a team.">
      <div className="space-y-8">
        {big.map((p) => (
          <article key={p.id} className="lift rounded-xl border border-line border-l-4 border-l-accent bg-surface p-6 sm:p-8">
            <p className="ui text-sm font-medium text-accent">{p.kind}</p>
            <h3 className="mt-1 text-2xl font-bold sm:text-3xl">{p.title}</h3>
            <p className="mt-3 max-w-2xl">{p.summary}</p>
            {p.role && (
              <p className="mt-4 rounded-md bg-accent-soft px-4 py-3 text-[0.95rem]"><strong className="ui">My role: </strong>{p.role}</p>
            )}
            <Flow {...p.flow} />
            <ul className="mt-6 list-disc space-y-2 pl-5 marker:text-accent">
              {p.points.map((x) => <li key={x}>{x}</li>)}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <Chip key={t}>{t}</Chip>)}</div>
            <Links live={p.live} github={p.github} />
          </article>
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {rest.map((p) => (
          <article key={p.id} className="lift rounded-xl border border-line bg-surface p-6">
            <p className="ui text-sm text-muted">{p.kind}</p>
            <h3 className="mt-1 text-xl font-bold">{p.title}</h3>
            <p className="mt-2 text-muted">{p.summary}</p>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 marker:text-accent">
              {p.points.map((x) => <li key={x}>{x}</li>)}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <Chip key={t}>{t}</Chip>)}</div>
            <Links live={p.live} github={p.github} />
          </article>
        ))}
      </div>
    </Section>
  );
}
