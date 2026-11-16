import Section from "./Section";
import Links from "./Links";
import { experience, education, selfStudy } from "../data/experience";

function Entry({ title, org, date, text, live, github, extra }) {
  return (
    <li className="relative pb-10 pl-7 last:pb-0">
      <span className="absolute left-[-5px] top-2 size-2.5 rounded-full bg-accent" aria-hidden="true" />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="text-lg font-bold">{title}</h3>
        {date && <span className="ui text-sm text-muted">{date}</span>}
      </div>
      <p className="ui text-muted">{org}</p>
      {text && <p className="mt-2 max-w-2xl">{text}</p>}
      <Links live={live} github={github} />
      {extra && (
        <p className="ui mt-3 text-sm text-muted">
          {extra.label}:{" "}
          <a className="text-accent hover:underline" href={extra.live} target="_blank" rel="noreferrer">Live demo</a>{" "}
          <a className="hover:underline" href={extra.github} target="_blank" rel="noreferrer">Code</a>
        </p>
      )}
    </li>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience and education">
      <ol className="border-l border-line">
        {experience.map((e) => <Entry key={e.title} {...e} />)}
        <Entry {...education} />
      </ol>
      <p className="mt-8 max-w-2xl text-muted">{selfStudy}</p>
    </Section>
  );
}
