import { BiHeadphone } from "react-icons/bi";
import { BiMoon, BiSolidFilePdf } from "react-icons/bi";
import { FaBolt } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import { FaDiagramProject } from "react-icons/fa6";
import projectImg1 from "../Photos/joblance.png";
import projectImg2 from "../Photos/remina.jpeg";
import projectImg3 from "../Photos/restaurantos.jpeg";
import geraldfakaa from "../Photos/geraldfakaa.jpeg";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import pDF from "../PDF/ResumeFakaaGerald.pdf";

function Home() {
  const [mode, setMode] = useState();
  const [darkMode, setDarkMode] = useState(false);

const [audio,setAudio]=useState()

const AudioFunc=()=>{
  
}

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document
      .querySelector("body")
      .setAttribute("data-theme", darkMode ? "light" : "dark");
  };

  return (
    <div className="bg_container">
      <header>
        <nav className="md_nav_style p-4 w-full grid lg:grid-cols-3 md:grid-cols-1 flex-col justify-between items-center sm:flex-row">
          <h3 className="text_gen_color md_h3_style3  whitespace-nowrap">
            OPEN FOR FREELANCE OPPORTUNITIES
          </h3>
          <h3 className="md_h3_style2 text_gen_color lg:mt-0 sm:mt-5 order-3 sm:order-2 md:mt-0">
            GERALD FAKAA PORTFOLIO/2025-2026
          </h3>
          <div className="md_lastdiv_style flex justify-evenly items-center lg:mt-0  order-2 sm:order-3">
            <BiHeadphone className="text-2xl resume_color" />
            <div className="border_color ml-5" onClick={toggleTheme} style={{cursor: 'pointer'}}>
              <p className="text_gen_color text-l">
                {darkMode ? "Light" : "Dark"}
              </p>
              {darkMode ? (
                <FaBolt className="text_gen_color text-3xl" />
              ) : (
                <BiMoon className="text-white text-3xl" />
              )}
            </div>
            <a href={pDF} target="_blank" rel="noreferrer">
              <div className="border_color2 ml-5">
                <p className="text-l whitespace-nowrap">My Resume</p>
                <BiSolidFilePdf className="pdf_icon text-xl" />
              </div>
            </a>
          </div>
        </nav>
      </header>
      <main>
        <section className="section_one mt-10">
          <div className="dev_title_container">
            <h1 className="dev_title">
              <span className="dev_title_span ">FULL-STACK</span>{" "}
              <span className="dev_title_span2">ENGINEER</span>{" "}
            </h1>
          </div>

          <div className="">
            <div className="image_style_div">
              <img src={geraldfakaa} className="image_style" alt="Gerald Fakaa" />
            </div>

            <div className="bio_content bio_details">
              <div className="flex items-center mt-6">
                <h2 className="primary_redd font-bold">ABOUT ME</h2>
                <hr className="first_hr" />
              </div>
              <p className="text_gen_color text-sm">
                Product-driven CTO and Senior Full-Stack Engineer specializing in MERN stack architecture and scalable startup platforms. Founder and technical lead of Remina and RestaurantOS, delivering real-time systems across event media sharing and restaurant operations.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20 grid sm:grid-cols-1">
          <h2 className="text_gen_color text-xl font-bold">FEATURED PROJECTS[3]</h2>
          <hr className="hr_color mt-8" />
          <article className="project_content grid sm:grid-cols-1 lg:grid-cols-2 p-4">
            <div className="project_content_div1">
              <h3 className="text_gen_color font_fam">JOBLANCE</h3>

              <p className="text_gen_color text-sm lg:mt-5 lg:w-full md:w-full sm:w-full">
                Discover a revolutionary platform for effortlessly finding job
                opportunities and securing employment. Our platform seamlessly
                combines cutting-edge technology with user-friendly simplicity,
                empowering you to confidently navigate the job market.
              </p>
              <div className="flex items-center mt-3">
                <span className="text_gen_color">React, ExpressJs, MongoDb</span>
                <LuArrowUpRight className="text_gen_color ml-2" />
              </div>
              <div className="flex items-center mt-2">
                <Link to="https://joblance.onrender.com/" target="_blank">
                  <span className="primary_redd font-bold">VISIT NOW</span>
                </Link>

                <FaDiagramProject className="ml-2 primary_redd" />
              </div>
            </div>
            <div className="project_content_div2">
              <img
                src={projectImg1}
                className="w-full centered h-auto"
                alt="Joblance Project Screenshot"
              />
            </div>
          </article>
          <hr className="hr_color mt-8" />
          <article className="project_content grid sm:grid-cols-1 lg:grid-cols-2 p-4">
            <div className="project_content_div1">
              <h3 className="text_gen_color font_fam2 ">REMINA</h3>

              <p className="text_gen_color text-sm sm:mt-5 lg:mt-5 lg:w-full md:w-full">
                Architected an AI-powered event media sharing platform with real-time chat and notifications. Built scalable backend services using Node.js, Express, MongoDB, Redis, and Socket.IO. Designed wallet and payment workflows using Paystack.
              </p>
              <div className="flex items-center mt-3">
                <span className="text_gen_color">React, Node.js, Socket.IO, Redis</span>
                <LuArrowUpRight className="text_gen_color ml-2" />
              </div>
              <div className="flex items-center mt-2">
                <Link to="https://remina-app.com" target="_blank">
                  <span className="primary_redd font-bold">VISIT NOW</span>
                </Link>
                <FaDiagramProject className="ml-2 primary_redd" />
              </div>
            </div>
            <div className="project_content_div2">
              <img
                src={projectImg2}
                className="w-full centered h-auto"
                alt="Remina Project Screenshot"
              />
            </div>
          </article>

          <hr className="hr_color mt-8" />
          <article className="project_content grid sm:grid-cols-1 lg:grid-cols-2 p-4">
            <div className="project_content_div1">
              <h3 className="text_gen_color font_fam2">DINE-OS</h3>
              <p className="text_gen_color lg:mt-5 text-sm sm:mt-5 lg:w-full md:w-full">
                Designed and built a multi-tenant restaurant management system supporting POS, inventory, staff scheduling, and order workflows. Implemented Redis and RabbitMQ for real-time operations and print job handling.
              </p>
              <div className="flex items-center mt-3">
                <span className="text_gen_color">React, Node.js, Redis, RabbitMQ</span>
                <LuArrowUpRight className="text_gen_color ml-2" />
              </div>
              <div className="flex items-center mt-2">
                <Link to="https://dine-os.tech" target="_blank">
                  <span className="primary_redd font-bold">VISIT NOW</span>
                </Link>

                <FaDiagramProject className="ml-2 primary_redd" />
              </div>
            </div>
            <div className="project_content_div2">
              <img
                src={projectImg3}
                className="w-full centered h-auto"
                alt="Dine-OS Project Screenshot"
              />
            </div>
          </article>
          <hr className="hr_color mt-8" />
        </section>

        <section className="skill_content grid gap-24 sm:grid-cols-1 lg:grid-cols-2 mt-32">
          <div className="">
            <h2 className="text_gen_color text-xl font-bold">MAJOR SKILLS</h2>

            <div className="flex items-center justify-between mt-5">
              <span className="text_gen_color text-xl">JAVASCRIPT (ES6+) / TYPESCRIPT</span>
              <LuArrowUpRight className="text_gen_color ml-2" />
            </div>
            <hr className="hr_color mt-2" />
            <div className="flex items-center justify-between mt-5">
              <span className="text_gen_color text-xl">REACT / REACT NATIVE</span>
              <LuArrowUpRight className="text_gen_color ml-2" />
            </div>
            <hr className="hr_color mt-2" />
            <div className="flex items-center justify-between mt-5">
              <span className="text_gen_color text-xl">NODE.JS / EXPRESS</span>
              <LuArrowUpRight className="text_gen_color ml-2" />
            </div>
            <hr className="hr_color mt-2" />
            <div className="flex items-center justify-between mt-5">
              <span className="text_gen_color text-xl">MONGODB / MYSQL</span>
              <LuArrowUpRight className="text_gen_color ml-2" />
            </div>
            <hr className="hr_color mt-2" />
            <div className="flex items-center justify-between mt-5">
              <span className="text_gen_color text-xl">DOCKER / VPS DEPLOYMENT</span>
              <LuArrowUpRight className="text_gen_color ml-2" />
            </div>
            <hr className="hr_color mt-2" />
            <div className="flex items-center justify-between mt-5">
              <span className="text_gen_color text-xl">REDIS / RABBITMQ</span>
              <LuArrowUpRight className="text_gen_color ml-2" />
            </div>
            <hr className="hr_color mt-2" />
            <div className="flex items-center justify-between mt-5">
              <span className="text_gen_color text-xl">PAYMENT INTEGRATIONS (PAYSTACK)</span>
              <LuArrowUpRight className="text_gen_color ml-2" />
            </div>
            <hr className="hr_color mt-2" />
            <div className="flex items-center justify-between mt-5">
              <span className="text_gen_color text-xl">REST APIS / WEBSOCKETS</span>
              <LuArrowUpRight className="text_gen_color ml-2" />
            </div>
            <hr className="hr_color mt-2" />
          </div>
          <div className="">
            <h2 className="text_gen_color text-xl font-bold">MY HOBBIES/INTEREST</h2>

            <p className="text_gen_color mt-5">
              Beyond my professional pursuits, I engage in designing clothes and
              showcase my creative skills. Outside of work, I have a passion for
              playing basketball and video games ; collaborating with me ensures
              these endeavors are sustained. Feel free to GET IN TOUCH for more
              insights into my professional and personal pursuits.
            </p>
            <div className="picture_frame">
            </div>
          </div>
        </section>
        <section className="inquires_section">
          <p className="text_gen_color inquires_section_p">
            If you have any inquiries, proposals, or exciting projects in mind,
            feel free to reach out. I'm open to collaboration and always ready
            to discuss new opportunities.
          </p>
        </section>
        <hr className="hr_color mt-10" />
        <section className="COLLABORATE_div">
          <h2 className="COLLABORATE_p">
            {" "}
            <a href="mailto:geraldfakaa1@gmail.com">
              TRYNA COLLABORATE ? REACH OUT....
            </a>{" "}
          </h2>
        </section>
        <hr className="hr_color" />

        <footer className="socials_section grid lg:grid-cols-4 md:grid-cols-4 sm:grid sm:grid-cols-3  mt-20 gap-10">
          <Link
            to="https://github.com/Gbadass?tab=repositories"
            target="_blank"
          >
            <h3 className="socails_border text_gen_color text-center">
              GITHUB
            </h3>
          </Link>
          <Link
            to="https://www.linkedin.com/in/gerald-fakaa-ba9608266/"
            target="_blank"
          >
            <h3 className="socails_border text_gen_color text-center">
              LINKDEN
            </h3>
          </Link>
          <Link to="https://twitter.com/_Gbadass" target="_blank">
            <h3 className="socails_border text_gen_color text-center">
              TWITTER
            </h3>
          </Link>
          <Link to="" target="_blank">
            <h3 className="socails_border text_gen_color text-center">
              INSTAGRAM
            </h3>
          </Link>
        </footer>
      </main>
    </div>
  );
}

export default Home;
