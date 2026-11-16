import { profile } from "../data/profile";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon } from "./Icons";

function Row({ icon, children }) {
  return <li className="flex items-center gap-3">{icon}<span>{children}</span></li>;
}

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 pb-20 pt-10">
      <div className="grid gap-10 rounded-2xl bg-ink p-8 text-bg sm:p-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Let's build something together.</h2>
          <p className="mt-4 max-w-md opacity-80">
            I'm looking for a junior front-end role where I can keep building with React. Email is the fastest way to reach me.
          </p>
          <a href={`mailto:${profile.email}`} className="ui mt-7 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-ink hover:opacity-90">
            <MailIcon /> Email me
          </a>
        </div>
        <ul className="space-y-3 self-center">
          <Row icon={<MailIcon />}>{profile.email}</Row>
          <Row icon={<PhoneIcon />}><a className="hover:underline" href={`tel:${profile.phone}`}>{profile.phone}</a></Row>
          <Row icon={<GitHubIcon />}><a className="hover:underline" href={profile.github} target="_blank" rel="noreferrer">GitHub</a></Row>
          {profile.linkedin && <Row icon={<LinkedInIcon />}><a className="hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></Row>}
          <Row icon={<PinIcon />}>{profile.location}</Row>
          <Row icon={<DownloadIcon />}><a className="hover:underline" href={profile.cv} download>Download my CV (PDF)</a></Row>
        </ul>
      </div>
    </section>
  );
}
