import { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/content";

const filters = ["All", "In progress", "Planned"];

export default function Projects() {
  usePageTitle("Projects");
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.status === active);

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionTitle center>My projects</SectionTitle>

        <div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects by status">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                active === f
                  ? "border-blue-500 bg-blue-600 text-white"
                  : "border-slate-700 text-slate-300 hover:bg-slate-800"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {visible.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}