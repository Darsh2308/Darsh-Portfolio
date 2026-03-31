"use client";

import {
  FaReact,
  FaDatabase,
  FaMicrochip,
  FaServer,
  FaCloud,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaBrain,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiArduino,
  SiRaspberrypi,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiFastapi,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiTailwindcss,
  SiThreedotjs,
  SiAmazonaws,
  SiOpenai,
} from "react-icons/si";
import { TbApi, TbBrandSocketIo } from "react-icons/tb";
import { MdRecordVoiceOver } from "react-icons/md";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  accentColor: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI & LLM",
    icon: <FaBrain />,
    accentColor: "text-violet-400",
    skills: [
      { name: "LangChain", icon: <SiOpenai className="text-green-400" /> },
      { name: "LangGraph", icon: <SiOpenai className="text-emerald-400" /> },
      { name: "Agentic AI", icon: <FaBrain className="text-violet-400" /> },
      { name: "Prompt Eng.", icon: <FaBrain className="text-purple-400" /> },
      { name: "RAG", icon: <FaBrain className="text-indigo-400" /> },
      { name: "LLM Orchestration", icon: <FaBrain className="text-pink-400" /> },
      { name: "Voice AI", icon: <MdRecordVoiceOver className="text-cyan-400" /> },
      { name: "Sarvam AI APIs", icon: <MdRecordVoiceOver className="text-blue-400" /> },
    ],
  },
  {
    title: "Frontend",
    icon: <FaReact />,
    accentColor: "text-cyan-400",
    skills: [
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Three.js", icon: <SiThreedotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "HTML/CSS", icon: <FaHtml5 className="text-orange-400" /> },
    ],
  },
  {
    title: "Backend & APIs",
    icon: <FaServer />,
    accentColor: "text-green-400",
    skills: [
      { name: "Python", icon: <FaPython className="text-yellow-300" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-green-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "REST APIs", icon: <TbApi className="text-blue-400" /> },
      { name: "WebSockets", icon: <TbBrandSocketIo className="text-pink-400" /> },
      { name: "C/C++", icon: <SiCplusplus className="text-blue-400" /> },
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    accentColor: "text-pink-400",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
      { name: "DynamoDB", icon: <SiAmazonaws className="text-orange-500" /> },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: <FaCloud />,
    accentColor: "text-purple-400",
    skills: [
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
      { name: "AWS (Cognito)", icon: <SiAmazonaws className="text-orange-400" /> },
      { name: "Google Cloud", icon: <SiGooglecloud className="text-red-400" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    ],
  },
  {
    title: "IoT & Embedded",
    icon: <FaMicrochip />,
    accentColor: "text-orange-400",
    skills: [
      { name: "Arduino", icon: <SiArduino className="text-teal-400" /> },
      { name: "Raspberry Pi", icon: <SiRaspberrypi className="text-pink-400" /> },
      { name: "Microcontrollers", icon: <FaMicrochip className="text-orange-400" /> },
      { name: "FPGA", icon: <FaMicrochip className="text-purple-400" /> },
    ],
  },
];

const TechnicalSkills = () => {
  return (
    <section id="skills" className="pb-20 pt-36 relative">
      <div
        className="h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="heading">
          Technical <span className="text-purple">Skills</span>
        </h2>
        <p className="text-[#C1C2D3] mb-14 mt-4 max-w-xl mx-auto">
          A comprehensive toolkit spanning AI/LLM, full-stack, IoT, and cloud
          technologies
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="relative rounded-3xl border border-white/[0.1] p-6 group hover:border-white/[0.2] transition-all duration-300"
              style={{
                background:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-3xl" />

              <div className="flex flex-col items-center mb-6">
                <div
                  className={`text-3xl mb-3 ${category.accentColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#10132E] border border-white/[0.08] hover:border-white/[0.2] hover:bg-[#161a3a] transition-all duration-200 cursor-default"
                  >
                    <span className="text-base">{skill.icon}</span>
                    <span className="text-sm text-[#C1C2D3] font-medium whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
