export default function SkillCard({ skill }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
      <p className="mt-1 text-sm text-blue-300">{skill.label}</p>
      <div
        className="mt-4 h-2 rounded-full bg-slate-800"
        role="img"
        aria-label={`${skill.name} level ${skill.level} out of 5`}
      >
        <div className="h-2 rounded-full bg-blue-500" style={{ width: `${(skill.level / 5) * 100}%` }} />
      </div>
    </div>
  );
}