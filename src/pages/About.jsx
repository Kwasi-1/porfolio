import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Layout from "../Layout";

const About = () => {
  const experience = [
    "Degree in Brand Communications",
    "15 years experience in Digital Design, Web Development, Advertising and Product Development",
    "12 years experience in Web Design",
    "10 years experience in Software Design",
    "3 years experience in Front-end Web Development",
  ];

  const skills = [
    "UI/UX Design",
    "Strategy",
    "Product Management",
    "User Research",
    "Agile Methodologies",
    "Collaboration",
    "Design Sprints",
    "Design Systems",
    "HTML and CSS",
    "CMS Design & Architecture",
    "Webflow Development",
    "Framer Development",
    "Photography",
    "Graphic Design",
  ];

  const kudos = [
    "Shawn Roos",
    "Wayne Berry",
    "Daniel Klopper",
    "Michael Thorne",
    "Kobus Brummer",
    "Pascal Righini",
    "Jade Scully",
  ];

  return (
    <Layout backgroundColor="#ece7e1">
      <div className="flex bg-light text-primary">
        <Sidebar />
        <div className="relative mx-auto max-w-[90%] pl-[10%] pr-[5%] text-sm font-body font-[400] tracking-wide leading-[1.9] pb-11 ">
          <div className="w-[50%] pt-[10%] pb-[8%] flex flex-col justify-center text-left">
            <h1 className="font-custom text-[14vw] leading-none my-7 font-[300]">About</h1>

            <p className="font-custom text-[46px] text-[300] leading-[1.3] mb-9 ">I'm Lauren. A designer, maker and problem solver.</p>
            <p className="mb-7">
              The cusp of art and technology has always fascinated me, and I've never been afraid to jump in and give it a go, whether it's Paint, Photoshop, Sketch, or CSS. I've been designing with computers since the day I first opened Microsoft Paint.
            </p>
            <p className="mb-7">
              Fast forward to 2023, and I've tried it all, from Digital Campaign Design and Flash Actionscript to Web Design, Animation, HTML/CSS, No-Code Web Development, Product Design, and Product Management. Everything I have done, small or big, has been a vital stepping stone for where I am today.
            </p>
            <p className="mb-7">
              What excites me most about being a Product Designer is the ability to design and create things that have purpose and solve real problems. It goes beyond designing buttons and websites and involves having a passion for creating experiences and solutions that help people.
            </p>
            <p className="mb-7">This is one of my favourite quotes (by Peter Drucker):</p>
            <blockquote className="font-custom text-[46px] text-[300] leading-[1.3] mb-9 ">
              “There is nothing so useless as doing efficiently that which should not be done at all.”
            </blockquote>
            <p className="mb-7">
              This quote resonates with me because I have no desire to make pretty things just for the sake of it. I only want to make, design, or build ideas and products that matter and have an impact in the world.
            </p>

            <h3 className="my-8 font-[500] font-custom text-xl uppercase tracking-[5px]">Experience</h3>
            <ul className="list-disc list-inside">
              {experience.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className="my-8 font-[500] font-custom text-xl uppercase tracking-[5px]">Skills</h3>
            <ul className="list-disc list-inside">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

            <Link className="my-4 px-[60px] py-5 w-fit text-2xl leading-[20px] font-custom bg-dark text-accent hover:bg-secondary rounded-full hover:px-[100px] ease-in-out transition-[padding] duration-300 tracking-[1px]">
              My CV
            </Link>

            <h3 className="my-8 font-[500] font-custom text-xl uppercase tracking-[5px]">Kudos</h3>
            <p className="mb-4">
              Most of what is in this portfolio is teamwork. I have only included work where I made a significant contribution, but these people have influenced my career:{" "}
              {kudos.join(", ")}.
            </p>
            <Link to='/contact' className="my-4 px-[60px] py-5 w-fit text-2xl leading-[20px] font-custom bg-dark text-accent hover:bg-secondary rounded-full hover:px-[100px] ease-in-out transition-[padding] duration-300 tracking-[1px]">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
