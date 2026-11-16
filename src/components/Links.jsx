import { ExternalIcon, GitHubIcon } from "./Icons";

export default function Links({ live, github }) {
  if (!live && !github) return null;
  return (
    <div className="ui mt-4 flex gap-4 text-sm font-semibold">
      {live && (
        <a href={live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-accent hover:underline">
          <ExternalIcon width={16} height={16} /> Live demo
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:underline">
          <GitHubIcon width={16} height={16} /> Code
        </a>
      )}
    </div>
  );
}
