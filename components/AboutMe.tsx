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
            words="Passionate Developer & Innovator"
            className="text-[32px] md:text-5xl lg:text-6xl font-bold mt-4"
          />

          <p className="text-center md:tracking-wider mt-6 text-sm md:text-lg lg:text-xl leading-relaxed text-gray-300">
            I&apos;m a Final year Electronics and Telecommunication Engineering
            student with a passion for creating innovative digital solutions.
            Currently serving as{" "}
            <span className="font-semibold text-white">
              Lead Full Stack Developer at Hubnex Labs
            </span>
            , I specialize in end-to-end development and team leadership.
          </p>

          <p className="text-center md:tracking-wider mt-6 text-sm md:text-lg lg:text-xl leading-relaxed text-gray-300">
            My journey spans from frontend frameworks like{" "}
            <span className="font-semibold text-white">React.js</span> and{" "}
            <span className="font-semibold text-white">Next.js</span> to backend
            technologies like{" "}
            <span className="font-semibold text-white">Node.js</span> and{" "}
            <span className="font-semibold text-white">FastAPI</span>. <br />
            I&apos;m particularly passionate about{" "}
            <span className="font-semibold text-white">IoT solutions</span>
            and how technology can solve real-world problems, as demonstrated in
            my agricultural irrigation and women&apos;s safety projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
