import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const About = () => {
  return (
    <div id="about" className="pb-20 pt-36 relative">
      {/**
       * Spotlights for background effect
       */}
      <div></div>

      {/**
       * Grid Background with fade effect
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/**
       * Main About Section
       */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
          <p className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
            About Me
          </p>

          <TextGenerateEffect
            words="AI Engineer & Full Stack Developer"
            className="text-[32px] md:text-5xl lg:text-6xl font-bold mt-4"
          />

          <p className="text-center md:tracking-wider mt-6 text-sm md:text-lg lg:text-xl leading-relaxed text-gray-300">
            I&apos;m a final-year Electronics and Telecommunication Engineering
            student with hands-on experience building{" "}
            <span className="font-semibold text-white">
              production-grade agentic systems
            </span>
            , voice AI pipelines, and LLM-powered applications. Currently
            working as an{" "}
            <span className="font-semibold text-white">
              AI-Powered Full Stack Developer at Groove Innovations
            </span>
            , Bengaluru — where I build intelligent CRM systems, smart payment
            gateways, and cloud-scale infrastructure.
          </p>

          <p className="text-center md:tracking-wider mt-6 text-sm md:text-lg lg:text-xl leading-relaxed text-gray-300">
            My stack spans{" "}
            <span className="font-semibold text-white">
              LangChain, LangGraph, RAG & Agentic AI
            </span>{" "}
            on the AI side, with{" "}
            <span className="font-semibold text-white">
              React.js, Next.js, FastAPI & Node.js
            </span>{" "}
            for full-stack development. I&apos;ve led teams of 15–20 developers,
            architected real-time collaborative platforms, and shipped voice AI
            agents optimised for{" "}
            <span className="font-semibold text-white">
              Indian language support
            </span>{" "}
            — always focused on driving real-world impact at scale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
