import meImg from "../assets/me.webp";
import RoleDemo from "./RoleDemo";
import { profile } from "../data/profile";
import { DownloadIcon, MailIcon } from "./Icons";

const stats = [
  { n: "4", t: "team projects led" },
  { n: "+20", t: "learning projects built" },
  { n: "MERN", t: "full-stack stack" },
];

export default function Hero() {
  return (
    <div className="relative">
      <div className="hero-bg absolute inset-0 -z-10" aria-hidden="true" />
      <section id="top" className="mx-auto grid max-w-5xl gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:pt-24">
        <div className="hero-in">
          <div className="flex items-center gap-4">
            <img src={meImg} alt={profile.name} width="72" height="72" className="size-18 rounded-full border-2 border-accent object-cover" />
            <div className="ui">
              <p className="font-bold">{profile.name}</p>
              <p className="text-sm text-muted">Front-End Developer | Software Engineer, Egypt</p>
            </div>
          </div>
          <h1 className="mt-7 text-4xl font-extrabold sm:text-6xl">
            I build React apps that handle <span className="mark">real data, logins and user roles.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            B.Sc. in Information Technology. I work with React, Tailwind and React Query, write Node.js and Express backends with MongoDB,
            and I've led student teams on two React projects.
          </p>
          <div className="ui mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-md bg-accent px-5 py-2.5 font-semibold text-accent-ink hover:opacity-90">See my projects</a>
            <a href={profile.cv} download className="lift inline-flex items-center gap-2 rounded-md border border-line bg-surface px-5 py-2.5 font-semibold">
              <DownloadIcon /> Download CV
            </a>
            <a href={`mailto:${profile.email}`} className="lift inline-flex items-center gap-2 rounded-md border border-line bg-surface px-5 py-2.5 font-semibold">
              <MailIcon /> Email me
            </a>
          </div>
        </div>
        <div className="hero-in-2 border-5 border-solid border-accent rounded-full"><img className="w-full h-full object-cover rounded-full" src={meImg} alt={profile.name} /></div>
      </section>
      <dl className="ui mx-auto grid max-w-5xl grid-cols-3 gap-4 border-y border-line px-5 py-6 text-center">
        {stats.map((s) => (
          <div key={s.t}>
            <dt className="text-3xl font-extrabold text-accent sm:text-4xl">{s.n}</dt>
            <dd className="text-sm text-muted">{s.t}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
