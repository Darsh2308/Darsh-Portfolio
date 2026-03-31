import { HiBadgeCheck } from "react-icons/hi";
import { SiGoogle, SiIbm, SiFreecodecamp } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";

const certifications = [
  {
    title: "Google Cybersecurity Certification",
    issuer: "Google Skills Boost",
    icon: <SiGoogle className="text-blue-400 text-2xl" />,
    color: "from-blue-500/10 to-transparent",
    border: "hover:border-blue-500/40",
  },
  {
    title: "Full Stack Development, Generative AI & Python Programming",
    issuer: "Great Learning",
    icon: <FaGraduationCap className="text-green-400 text-2xl" />,
    color: "from-green-500/10 to-transparent",
    border: "hover:border-green-500/40",
  },
  {
    title: "IBM Frontend Developer Internship & Certification",
    issuer: "AICET Edunet Foundations",
    icon: <SiIbm className="text-blue-300 text-2xl" />,
    color: "from-blue-400/10 to-transparent",
    border: "hover:border-blue-400/40",
  },
  {
    title: "Legacy Frontend Developer Certification",
    issuer: "freeCodeCamp",
    icon: <SiFreecodecamp className="text-green-300 text-2xl" />,
    color: "from-green-400/10 to-transparent",
    border: "hover:border-green-400/40",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">Certifications</span>
      </h1>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`relative rounded-2xl border border-white/[0.1] ${cert.border} p-6 flex flex-col gap-4 transition-all duration-300 group`}
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            {/* Top glow line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-2xl" />

            {/* Icon with subtle bg */}
            <div className="w-12 h-12 rounded-xl bg-[#10132E] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              {cert.icon}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1 flex-1">
              <p className="text-white font-semibold text-sm leading-snug">
                {cert.title}
              </p>
              <p className="text-[#C1C2D3] text-xs mt-1">{cert.issuer}</p>
            </div>

            {/* Badge */}
            <div className="flex items-center gap-1 text-xs text-purple font-medium">
              <HiBadgeCheck className="text-base" />
              <span>Certified</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
