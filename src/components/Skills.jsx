import Section, { Chip } from "./Section";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="Grouped by what I use them for. Every item here is used in at least one project below.">
      <dl className="divide-y divide-line border-y border-line">
        {skillGroups.map((g) => (
          <div key={g.title} className="grid gap-3 py-5 sm:grid-cols-[13rem_1fr]">
            <dt className="ui font-semibold">{g.title}</dt>
            <dd className="flex flex-wrap gap-2">
              {g.items.map((i) => <Chip key={i}>{i}</Chip>)}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
