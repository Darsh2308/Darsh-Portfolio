import { navItems } from "@/data";
import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import About from "@/components/AboutMe";

const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const TechnicalSkills = dynamic(() => import("@/components/TechnicalSkills"));
const RecentProjects = dynamic(() => import("@/components/RecentProjects"));
const Clients = dynamic(() => import("@/components/Clients"));
const Experience = dynamic(() => import("@/components/Experience"));
const Certifications = dynamic(() => import("@/components/Certifications"));
const Approach = dynamic(() => import("@/components/Approach"));
const Footer = dynamic(() => import("@/components/Footer"));

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Grid />
        <TechnicalSkills />
        <RecentProjects />
        <Clients />
        <Experience />
        <Certifications />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
