import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import { skills, projects } from "../data/content";

export default function Home() {
  usePageTitle("Home");

  return (
    <>
      <section className="bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.18),transparent_65%)] px-6 py-24 text-center md:py-32">
        <div className="rise mx-auto flex max-w-3xl flex-col items-center">
          <div
            className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-blue-400 bg-slate-900 text-2xl font-bold text-blue-400"
            aria-hidden="true"
          >
            MA
          </div>
          <p className="mb-4 text-blue-400">Welcome to my portfolio</p>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            Hi, I'm Mujib Ashraf Mainuddin
          </h1>
          <h2 className="mb-6 text-xl text-slate-300 md:text-2xl">
            CSE Student | Aspiring Web Developer
          </h2>
          <p className="mb-8 max-w-xl leading-7 text-slate-400">
            I am a Computer Science and Engineering student at IIUC. I am learning
            programming and modern web development to build useful websites.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/projects" className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
              Explore my projects
            </Link>
            <Link to="/contact" className="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-200 transition hover:bg-slate-800">
              Contact me
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionTitle>My skills</SectionTitle>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {skills.slice(0, 3).map((s) => (
            <SkillCard key={s.name} skill={s} />
          ))}
        </div>
        <Link to="/skills" className="mt-6 inline-block text-blue-400 underline underline-offset-4 hover:text-blue-300">
          See all skills
        </Link>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle>Projects</SectionTitle>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white">Want to work together?</h2>
        <p className="mx-auto mt-3 max-w-md text-slate-400">Send me a message and I will reply as soon as I can.</p>
        <Link to="/contact" className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
          Send a message
        </Link>
      </section>
    </>
  );
}