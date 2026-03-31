"use client";
import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationArrow, FaTimes } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative z-10 w-full max-w-2xl rounded-2xl border border-white/[0.1] bg-[#13162D] shadow-[0_8px_32px_rgb(0_0_0/0.6)] overflow-hidden"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <FaTimes className="text-white text-sm" />
            </button>

            {/* Project image */}
            <div className="relative w-full h-52 sm:h-64 overflow-hidden">
              <Image
                src="/bg.png"
                alt="Background"
                fill
                className="object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13162D] via-transparent to-transparent z-10" />
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-contain z-[5] p-4"
              />
            </div>

            {/* Content */}
            <div className="p-6 pt-4">
              <h2 className="font-bold text-xl sm:text-2xl text-white mb-3 leading-snug">
                {project.title}
              </h2>

              <p
                className="text-sm sm:text-base font-light leading-relaxed"
                style={{ color: "#BEC1DD" }}
              >
                {project.des}
              </p>

              {/* Tech stack */}
              <div className="flex items-center mt-5 gap-1">
                {project.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[0.2] rounded-full bg-black w-9 h-9 flex justify-center items-center"
                    style={{ transform: `translateX(-${5 * index + 2}px)` }}
                  >
                    <Image
                      src={icon}
                      alt={`Tech icon ${index}`}
                      width={40}
                      height={40}
                      className="p-2"
                    />
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/[0.08] my-5" />

              {/* CTA */}
              <div className="flex justify-end">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple/20 border border-purple/40 hover:bg-purple/30 transition-colors group"
                >
                  <span className="text-purple font-semibold text-sm">
                    See Live Project
                  </span>
                  <FaLocationArrow
                    className="text-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    size={13}
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
