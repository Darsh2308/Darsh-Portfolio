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
    title: "Wandering Wild Educational Website",
    des: "I created 'Wandering Wild' an educational website designed to make learning about animals fun and engaging for children.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://wandering-wild2308.vercel.app/",
  },
  {
    id: 2,
    title: "Landing Page for Company",
    des: "I created a professional landing page for the company I’m working with as part of an assigned project. I was responsible for handling both the frontend and backend of the application. In addition to the landing page, I also developed a comprehensive admin dashboard for internal use. This dashboard allows the team to view and manage all form submissions received through the website, providing a streamlined and efficient way to handle user input and engagement.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://www.hubnex.in",
  },
  {
    id: 3,
    title: "Storyark",
    des: "StoryArk is a dynamic web application designed to bring the world of cinema to your fingertips. With an intuitive interface, StoryArk allows users to search for the latest movies and instantly view detailed information, including trailers, synopses, cast, and ratings. The homepage highlights the best trending movies, giving users a quick glance at what's popular right now. Powered by The Movie Database (TMDb) API, StoryArk ensures real-time access to up-to-date movie data. Whether you're looking for a new release, exploring top-rated films, or diving into a specific title's details, StoryArk makes discovering and exploring movies effortless and engaging.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://storyark.vercel.app",
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
    title: "Full Stack Web Developer",
    desc: "Create and manage both client and server-side applications, integrating APIs and managing databases.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Developer",
    desc: "Developed web apps with NoSQL and MySQL, optimizing performance and data management.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Leading a team of Developers to create a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
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
