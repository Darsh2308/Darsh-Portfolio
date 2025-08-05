// src/components/TechnicalSkills.tsx

import {
  FaReact,
  FaDatabase,
  FaMicrochip,
  FaServer,
  FaCloud,
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
} from "react-icons/si";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <FaReact className="text-blue-400" />,
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Three.js", level: 80 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    title: "Backend",
    icon: <FaServer className="text-green-400" />,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "Python", level: 90 },
      { name: "C/C++", level: 75 },
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase className="text-pink-400" />,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "SQL", level: 80 },
      { name: "Firebase", level: 85 },
    ],
  },
  {
    title: "IoT & Embedded",
    icon: <FaMicrochip className="text-orange-400" />,
    skills: [
      { name: "Arduino", level: 90 },
      { name: "Raspberry Pi", level: 85 },
      { name: "Microcontrollers", level: 80 },
      { name: "FPGA", level: 70 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: <FaCloud className="text-purple-400" />,
    skills: [
      { name: "Docker", level: 75 },
      { name: "Kubernetes", level: 70 },
      { name: "Google Cloud", level: 80 },
      { name: "Git", level: 90 },
    ],
  },
];

const TechnicalSkills = () => {
  return (
    <section id="skills" className="pb-20 pt-36 relative">
      {/** Grid background with radial fade effect */}
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
        <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
        <p className="text-gray-300 mb-12">
          A comprehensive toolkit spanning frontend, backend, IoT, and cloud
          technologies
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-white/20"
            >
              <div className="flex items-center justify-center text-3xl mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-gray-400">Primary Languages:</p>
          <div className="flex justify-center gap-3 mt-3">
            <span className="px-4 py-1 bg-white/10 rounded-full text-sm">
              Python
            </span>
            <span className="px-4 py-1 bg-white/10 rounded-full text-sm">
              JavaScript
            </span>
            <span className="px-4 py-1 bg-white/10 rounded-full text-sm">
              C++
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
