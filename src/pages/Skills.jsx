import usePageTitle from "../hooks/usePageTitle";
import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/content";

export default function Skills() {
  usePageTitle("Skills");

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <SectionTitle center>My skills</SectionTitle>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((s) => (
            <SkillCard key={s.name} skill={s} />
          ))}
        </div>
      </div>
    </section>
  );
}