import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Layout from "../Layout";

const About = () => {
  const experience = [
    "3 years of experience in Frontend Development",
    "Frontend Developer with expertise in React, Next.js, and TypeScript",
    "Building scalable, high-performance web applications",
    "Experience in internationalization and multilingual web applications",
    "Strong background in UI development and state management",
    "Proficient in designing and integrating APIs",
  ];

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Internationalization (i18n)",
    "REST & GraphQL APIs",
    "Version Control (Git & GitHub)",
    "Agile Development",
    "Performance Optimization",
    "Unit Testing & Integration Testing",
    "Web Accessibility",
  ];

  return (
    <Layout backgroundColor="#ece7e1">
      <div className="flex flex-col lg:flex-row bg-light text-primary">
        <Sidebar />
        <div className="relative mx-auto w-full lg:max-w-[90%] pl-[5%] lg:pl-[10%] pr-[5%] text-sm font-body font-[400] tracking-wide leading-[1.9] pb-11">
          <div className="w-full lg:w-[50%] pt-[10%] pb-[8%] flex flex-col justify-center text-left px-[4%] lg:px-0">
            {/* Heading */}
            <h1 className="font-custom text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] leading-none my-7 font-[300]">
              About
            </h1>

            {/* Introduction */}
            <p className="font-custom text-[30px] sm:text-[36px] md:text-[40px] font-[300] leading-[1.3] mb-9">
              I'm Nana Kwasi, a frontend developer passionate about building interactive web applications.
            </p>

            <p className="mb-7">
              My journey began with a curiosity about how websites function—from buttons clicking to seamless animations. Over time, I honed my skills in React, Next.js, TypeScript, and Tailwind CSS, allowing me to create scalable and accessible digital experiences.
            </p>
            <p className="mb-7">
              I enjoy solving complex problems, optimizing workflows, and collaborating with designers and backend engineers to bring ideas to life. Whether it's improving performance, refining UI/UX, or implementing internationalization (i18n), I'm always excited about building solutions that enhance user experience.
            </p>

            {/* Words I Live By */}
            <h3 className="my-8 font-[500] font-custom text-lg sm:text-xl uppercase tracking-[5px]">
              Words I Live By
            </h3>
            <blockquote className="font-custom text-[24px] sm:text-[30px] md:text-[36px] font-[300] leading-[1.3] mb-9">
              “Do the hard things.”
              <span className="block text-right text-base sm:text-lg mt-2">— Strive Masiyiwa</span>
            </blockquote>

            {/* What I'm Working On */}
            <h3 className="my-8 font-[500] font-custom text-lg sm:text-xl uppercase tracking-[5px]">
              What I'm Working On
            </h3>
            <p className="mb-7">
              Currently, I'm exploring ways to improve user experience in web applications by optimizing performance, enhancing accessibility, and integrating cutting-edge design principles.
            </p>

            {/* Experience */}
            <h3 className="my-8 font-[500] font-custom text-lg sm:text-xl uppercase tracking-[5px]">
              Experience
            </h3>
            <ul className="list-disc list-inside">
              {experience.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {/* Skills */}
            <h3 className="my-8 font-[500] font-custom text-lg sm:text-xl uppercase tracking-[5px]">
              Skills
            </h3>
            <ul className="list-disc list-inside">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

            {/* Resume Button */}
            <Link
              to="/resume"
              className="my-4 px-8 sm:px-[60px] py-4 sm:py-5 w-fit text-xl sm:text-2xl leading-[20px] font-custom bg-dark text-accent hover:bg-secondary rounded-full hover:px-[100px] ease-in-out transition-[padding] duration-300 tracking-[1px]"
            >
              My Resume
            </Link>

            {/* Let's Connect */}
            <h3 className="my-8 font-[500] font-custom text-lg sm:text-xl uppercase tracking-[5px]">
              Let's Connect
            </h3>
            <p className="mt-7 mb-7">
              I'm always open to collaborating on new projects, discussing innovative ideas, or sharing insights on web development. If you'd like to connect, feel free to reach out!
            </p>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="my-4 px-8 sm:px-[60px] py-4 sm:py-5 w-fit text-xl sm:text-2xl leading-[20px] font-custom bg-dark text-accent hover:bg-secondary rounded-full hover:px-[100px] ease-in-out transition-[padding] duration-300 tracking-[1px]"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;