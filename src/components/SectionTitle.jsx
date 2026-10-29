export default function SectionTitle({ children, center = false }) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-3xl font-bold text-white md:text-4xl">{children}</h2>
      <div className={`mt-3 h-1 w-14 rounded bg-blue-500 ${center ? "mx-auto" : ""}`} />
    </div>
  );
}