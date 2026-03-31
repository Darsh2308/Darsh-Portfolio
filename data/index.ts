import Image from "next/image"; // Ensure you have this import

// Updated navItems
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

// Updated gridItems
export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title:
      "Currently exploring the world of databases to master data management and optimization. Excited to see how they power modern applications.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// Updated projects
export const projects = [
  {
    id: 1,
    title: "Voice AI Agent Pipeline using Sarvam APIs",
    des: "Built a production-ready voice AI agent using PipeKit as the orchestration framework, integrating Sarvam AI's Saaras (ASR/speech-to-text) and Bulbul (TTS/text-to-speech) APIs. Designed a low-latency agent pipeline with LangGraph-based conversation state management, enabling multi-turn dialogue over voice channels. Optimized for Indian language support and telephony-grade audio quality.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://voice-ai.darshpatil.site/",
  },
  {
    id: 2,
    title: "SchematicHQ – AI-Powered Diagramming Tool",
    des: "Built an advanced Excalidraw-like platform with AI-driven text-to-diagram generation and Mermaid-to-flowchart conversion using LLM pipelines. Designed for intelligent automation, real-time collaboration, and scalable architecture visualization.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://www.altivis.systems",
  },
  {
    id: 3,
    title: "SafeSteps: Women's Safety Device & App",
    des: "Designed and developed a full-stack women's safety system with hardware (GPS buzzer device) and a companion mobile app. Features include real-time GPS alerts, two-way calling, and upcoming cloud-synced video recording.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://safesteps-one.vercel.app/",
  },
  {
    id: 4,
    title: "List of Projects",
    des: "Click here to see more of my works",
    img: "/p4.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://docs.google.com/presentation/d/1ODgYvWh9x7N177PTHwddCDktN2hF8M_g9_LQpKTVqAs/edit?usp=sharing",
  },
];

// Updated testimonials
export const testimonials = [
  {
    quote:
      "Collaborating with Darsh was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Darsh's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Darsh is the ideal partner.",
    name: "Om Khedekar",
    title: "Photographer & Cinematographer",
  },
  {
    quote:
      "Collaborating with Darsh was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Darsh's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Darsh is the ideal partner.",
    name: "Om Khedekar",
    title: "Photographer & Cinematographer",
  },
  {
    quote:
      "Collaborating with Darsh was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Darsh's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Darsh is the ideal partner.",
    name: "Om Khedekar",
    title: "Photographer & Cinematographer",
  },
  {
    quote:
      "Collaborating with Darsh was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Darsh's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Darsh is the ideal partner.",
    name: "Om Khedekar",
    title: "Photographer & Cinematographer",
  },
  {
    quote:
      "Collaborating with Darsh was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Darsh's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Darsh is the ideal partner.",
    name: "Om Khedekar",
    title: "Photographer & Cinematographer",
  },
];

// Updated companies
export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

// Updated workExperience
export const workExperience = [
  {
    id: 1,
    title: "AI-Powered Full Stack Developer",
    company: "Groove Innovations",
    location: "Bengaluru, Karnataka",
    duration: "Nov 2025 – Present",
    desc: "Built an intelligent CRM system with LLM-powered features for automated data enrichment and smart user workflows. Developed a smart payment gateway using React, Tailwind CSS, FastAPI, and Python. Implemented AWS Cognito, DynamoDB at scale, and PostHog for product analytics.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Hubnex Labs",
    location: "Gurugram, Haryana",
    duration: "Dec 2024 – Jul 2025",
    desc: "Led end-to-end development of CodeLabs, a real-time collaborative coding platform. Managed and mentored a team of 15–20 developers, conducting technical interviews and training sessions. Owned the full development lifecycle across frontend, backend, and cloud infrastructure.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

// Updated socialMedia
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Darsh2308",
  },
  {
    id: 2,
    img: "/linkedin.svg",
    link: "https://www.linkedin.com/in/darsh-patil2308",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.instagram.com/darsh4665/",
  },
];
