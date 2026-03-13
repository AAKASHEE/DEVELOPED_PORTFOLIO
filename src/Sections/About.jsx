import React from "react";
import Pic14 from "../assets/Pic14.jpg";
import "../Styles/About.css";
import languages from "../data/Languages";
import Language from "../components/Language";
import AOS from "aos";

AOS.init();

function About() {
  return (
    <div className="px-[5%] lg:px-[8%] py-20" id="about">
      <div className="2xl:container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className=" text-white">
          <div className="flex content-center justify-start">
            <div className="w-[80px] h-[1px] border border-blue-500 my-auto me-5"></div>
            <h4 className="text-blue-500 text-3xl lg:text-5xl mainFont">
              About Me
            </h4>
          </div>

          <div className="mt-10 text-xs lg:text-base secondFont ">
            <p className="text-white">
             I'm AAKASHEE, a problem solver and curious creator who enjoys turning ideas into meaningful digital experiences. My journey into technology started with photography. While capturing and editing photos, I wanted a platform where I could showcase my work online, which sparked my interest in building my own website. That curiosity led me into the world of web development, where I began learning how websites work and how to design platforms that present ideas and creativity effectively.

As I explored deeper into programming, my interest naturally expanded beyond building interfaces to understanding how efficient algorithms and problem-solving work behind the scenes. This pushed me toward competitive programming, where I enjoy solving challenging problems and strengthening my logical thinking.

Over time, this path has helped me grow not only technically but also creatively—combining design, development, and analytical thinking to build meaningful solutions and continuously improve as a developer.
            </p>
            <br />
            <p>
             Today, I blend creativity with analytical thinking to build meaningful digital experiences—whether through thoughtful design, 
             innovative development, or leading collaborative initiatives. I'm driven by a constant curiosity to learn, refine my skills, 
             and contribute to impactful technology projects.
            </p>
            <br />
            <div>
              <p>Technologies I use: </p>
              <div className="flex flex-wrap gap-4 mainFont mt-10">
                {languages.map((language, index) => (
                  <Language
                    key={index}
                    img={language.imgUrl}
                    name={language.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid place-content-center px-10">
          <div className="border-4 rounded-lg border-dotted border-white p-3">
            <div className="h-[350px] w-[350px] lg:h-[500px] lg:w-[500px] overflow-hidden group">
              <img
                src={Pic14}
                alt=""
                loading="lazy"
                className="group-hover:scale-125 -translate-y-10 lg:-translate-y-20 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
