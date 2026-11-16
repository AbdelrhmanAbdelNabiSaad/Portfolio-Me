import { useState } from "react";

const jobs = ["Front-End Developer", "React Developer", "UI Engineer"];

const roles = {
  seeker: {
    label: "Job seeker",
    nav: ["Browse jobs", "Saved jobs (3)", "My applications"],
    action: "Apply",
    note: "Sees listings, can save and apply.",
  },
  employer: {
    label: "Employer",
    nav: ["My listings", "Applicants (12)", "Post a job"],
    action: "View applicants",
    note: "Sees only their own listings and applicants.",
  },
};

export default function RoleDemo() {
  const [role, setRole] = useState("seeker");
  const r = roles[role];
  return (
    <div className="rounded-lg border border-line bg-surface p-5 shadow-sm">
      <p className="ui text-sm text-muted">One screen, two roles. Switch the role to see the interface change.</p>
      <div role="tablist" aria-label="Role" className="ui mt-3 inline-flex rounded-md border border-line p-1 text-sm">
        {Object.entries(roles).map(([key, v]) => (
          <button
            key={key}
            role="tab"
            aria-selected={role === key}
            onClick={() => setRole(key)}
            className={`rounded px-3 py-1.5 font-medium ${role === key ? "bg-accent text-accent-ink" : "text-muted hover:text-ink"}`}
          >
            {v.label}
          </button>
        ))}
      </div>

      <ul className="ui mt-4 flex flex-wrap gap-x-4 gap-y-1 border-b border-line pb-3 text-sm font-medium">
        {r.nav.map((n) => <li key={n}>{n}</li>)}
      </ul>
      <ul className="mt-2 divide-y divide-line">
        {jobs.map((j) => (
          <li key={j} className="flex items-center justify-between gap-3 py-3">
            <span className="ui font-medium">{j}</span>
            <span className="ui rounded-md border border-line px-3 py-1 text-sm text-accent">{r.action}</span>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-sm text-muted">{r.note}</p>
      <p className="mt-3 text-xs text-muted">
        A simplified version of the access pattern I built in my Job Portal project.
      </p>
    </div>
  );
}
