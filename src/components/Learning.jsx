import { useMemo, useState } from "react";
import Section, { Chip } from "./Section";
import Links from "./Links";
import { learningProjects } from "../data/learning";

const images = import.meta.glob("../assets/projects/*.webp", { eager: true, import: "default" });
const imgFor = (name) => images[`../assets/projects/${name}.webp`];

const categories = ["All", "React", "JavaScript", "Web Design", "HTML/CSS"];
const PAGE = 6;

export default function Learning() {
  const [cat, setCat] = useState("All");
  const [shown, setShown] = useState(PAGE);
  const list = useMemo(
    () => (cat === "All" ? learningProjects : learningProjects.filter((p) => p.category === cat)),
    [cat]
  );

  return (
    <Section
      id="learning"
      title="Learning projects"
      intro="Practice builds from my training: API apps, DOM logic, templates and Frontend Mentor challenges. They show how I learned, and the projects above show where I am now."
    >
      <div className="ui flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => { setCat(c); setShown(PAGE); }}
            aria-pressed={cat === c}
            className={`rounded-md border px-3.5 py-1.5 text-sm font-medium ${cat === c ? "border-accent bg-accent text-accent-ink" : "border-line hover:bg-accent-soft"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.slice(0, shown).map((p) => (
          <li key={p.id} className="flex flex-col lift overflow-hidden rounded-xl border border-line bg-surface">
            <img src={imgFor(p.image)} alt={`${p.title} screenshot`} loading="lazy" width="900" height="560" className="aspect-[16/10] w-full border-b border-line object-cover object-top" />
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 line-clamp-3 text-[0.95rem] text-muted">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tech.slice(0, 4).map((t) => <Chip key={t}>{t}</Chip>)}
              </div>
              <div className="mt-auto"><Links live={p.live} github={p.github} /></div>
            </div>
          </li>
        ))}
      </ul>

      {shown < list.length && (
        <button onClick={() => setShown((s) => s + PAGE)} className="ui mt-8 rounded-md border border-line px-5 py-2.5 font-semibold hover:bg-accent-soft">
          Show more ({list.length - shown} left)
        </button>
      )}
    </Section>
  );
}
