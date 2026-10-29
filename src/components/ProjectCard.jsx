export default function ProjectCard({ project }) {
  const inProgress = project.status === "In progress";

  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500/60">
      <span
        className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
          inProgress ? "bg-blue-500/15 text-blue-300" : "bg-slate-800 text-slate-400"
        }`}
      >
        {project.status}
      </span>
      <h3 className="mt-4 text-xl font-semibold text-white">{project.name}</h3>
      <p className="mt-3 flex-1 leading-7 text-slate-400">{project.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li key={t} className="rounded bg-slate-800 px-2 py-1 text-xs text-slate-300">
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}