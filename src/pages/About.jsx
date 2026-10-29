import usePageTitle from "../hooks/usePageTitle";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  usePageTitle("About");

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <SectionTitle>About me</SectionTitle>
        <p className="mt-8 mb-6 leading-8 text-slate-300">
          My name is Mujib Ashraf Mainuddin. I am studying Computer Science and
          Engineering at International Islamic University Chittagong (IIUC). I am
          currently in my 6th semester.
        </p>
        <p className="mb-10 leading-8 text-slate-300">
          My goal is to improve my programming skills, learn modern web
          technologies, and become a skilled web developer.
        </p>

        <h3 className="mb-4 text-xl font-semibold text-white">Education</h3>
        <div className="border-l-2 border-blue-500 pl-5">
          <p className="font-semibold text-white">International Islamic University Chittagong</p>
          <p className="text-slate-400">BSc in Computer Science and Engineering, 6th semester</p>
        </div>
      </div>
    </section>
  );
}