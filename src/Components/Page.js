import React from "react";
import html from "../Components/html5.svg";
import css from "../Components/css.svg";
import bootstrap from "../Components/bootstrap.svg";
import js from "../Components/js.svg";
import tailwind from "../Components/tailwind-css.svg";
import reactlogo from "../Components/reactlogo.svg";
import cpp from "../Components/cpp.svg";
import sql from "../Components/mysql.svg";
import git from "../Components/git.svg";
const Page = () => {
  return (
    <>
      <div className="h-14 w-[100%] bg-slate-600  md:h-24">
        <div className="pl-6 pt-3 md:pt-8">
          <i className="fa-solid fa-bars fa-2x " style={{ color: "white" }}></i>
        </div>
      </div>
      <div className="container w-auto md:ml-10 md:mr-7">
        <div className="mt-9 flex-col p-3 ml-3 w-72">
          <div
            className=" text-white mt-10 space-x-1 text-5xl md:text-8xl "
            style={{ lineHeight: "1.2" }}
          >
            I am Mohammad Ehtisham
          </div>
          <div
            className="type-writing mt-5 text-2xl w-[350px] md:text-3xl"
            style={{ color: "#dc9e4b" }}
          >
            Front End Developer
          </div>
          <div
            className=" text-6xl font-extrabold mt-14 md:text-9xl "
            style={{ color: "#dc9e4b" }}
          >
            LETS START!
          </div>
          <button className="border text-[#dc9e4b] text-xl rounded-3xl pl-8 pr-8 h-14 mt-9 font-medium hover:bg-yellow-600 hover:text-white md:text-3xl md:h-20 md:w-[360px] md:pl-12">
            {/* // eslint-disable-next-line */}
            <a
              href="https://drive.google.com/file/d/14A-6jjpEhFzo62Crh57BUcD_p2S6JY27/view?usp=sharing"
              download="MyResume.pdf"
              rel="noreferrer"
              target="_blank"
            >
              Download Resume
            </a>
          </button>
        </div>
        <div className="text-center m-10">
          <hr className="mt-5" />
        </div>

        {/* introdction */}

        <section className="flex-col ml-3 p-3 mt-16 ">
          <div className="text-4xl font-bold  text-[#dc9e4b] mb-5 md:text-7xl">
            I'm Mohammad Ehtisham
          </div>
          <div
            className="text-2xl text-white md:text-5xl"
            style={{ lineHeight: 1.2 }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus blanditiis ullam, eligendi quaerat neque, voluptate
            tempora eos quisquam vitae{" "}
            <strong className="text-[#dc9e4b]"> mud plus ouf the olof </strong>
            minus ipsam modi nam ad cum asperiores nulla quas quos excepturi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            repellendus amet esse sequi, facilis quo saepe dignissimos nesciunt
            cupiditate ipsam, odit eos corrupti atque non voluptates aliquid
            voluptatibus officiis vero?
          </div>
        </section>

        {/* Skills Section */}

        <section className="flex-col ml-3 p-3 mt-16 mb-8">
          <div id="bgAnimation" className="">
            <div className="inner text-4xl font-bold text-[#dc9e4b] pl-5 pt-6 w-[200px] md:text-6xl md:w-[400px]">
              My Skills
            </div>
          </div>
          <div className="text-white text-2xl mt-5 md:text-4xl md:mt-12">
            <p>These are my Skills</p>
            <hr className="mt-3" />
          </div>

          {/* here to start grid adjust krni hai */}
          <div className="grid grid-cols-1 mt-10 text-white text-xl  md:grid-cols-2 md:gap-4 md:text-3xl">
            <div className="text-center bg-slate-700 rounded-2xl pb-5 pt-3 mr-2 mt-2 mb-5">
              <img
                className="h-32 w-32"
                style={{ height: "128px", margin: "auto", width: "128px" }}
                src={html}
                alt="html5"
              />
              <p className=" font-bold">HTML</p>
            </div>
            <div className="text-center bg-slate-700 rounded-2xl pb-5 pt-3 mr-2 mt-2 mb-5">
              <img
                className="h-32 w-32"
                style={{ height: "128px", margin: "auto", width: "128px" }}
                src={css}
                alt="html5"
              />
              <p className="font-bold">CSS</p>
            </div>
            <div className="text-center bg-slate-700 rounded-2xl pb-5 pt-3 mr-2 mt-2 mb-5">
              <img
                className="h-32 w-32"
                style={{ height: "128px", margin: "auto", width: "128px" }}
                src={bootstrap}
                alt="html5"
              />
              <p className="font-bold">Bootstrap</p>
            </div>
            <div className="text-center bg-slate-700 rounded-2xl pb-5 pt-3 mr-2 mt-2 mb-5">
              <img
                className="h-32 w-32"
                style={{ height: "128px", margin: "auto", width: "128px" }}
                src={js}
                alt="html5"
              />
              <p className=" font-bold">Javascript</p>
            </div>
            <div className="text-center bg-slate-700 rounded-2xl pb-5 pt-3 mr-2 mt-2 mb-5">
              <img
                className="h-32 w-32"
                style={{ height: "128px", margin: "auto", width: "128px" }}
                src={tailwind}
                alt="html5"
              />
              <p className="font-bold">Tailwind CSS</p>
            </div>
            <div className="text-center bg-slate-700 rounded-2xl pb-5 pt-3 mr-2 mt-2 mb-5">
              <img
                className="h-32 w-32"
                style={{ height: "128px", margin: "auto", width: "128px" }}
                src={reactlogo}
                alt="html5"
              />
              <p className="font-bold">Reactjs</p>
            </div>
            <div className="text-center bg-slate-700 rounded-2xl pb-5 pt-3 mr-2 mt-2 mb-5">
              <img
                className="h-32 w-32"
                style={{ height: "128px", margin: "auto", width: "128px" }}
                src={cpp}
                alt="html5"
              />
              <p className=" font-bold">C++</p>
            </div>
            <div className="text-center bg-slate-700 rounded-2xl pb-5 pt-3 mr-2 mt-2 mb-5">
              <img
                className="h-32 w-32"
                style={{ height: "128px", margin: "auto", width: "128px" }}
                src={sql}
                alt="html5"
              />
              <p className=" font-bold">MySQL</p>
            </div>
            <div className="text-center bg-slate-700 rounded-2xl pb-5 pt-3 mr-2 mt-2 mb-5">
              <img
                className="h-32 w-32"
                style={{ height: "120px", margin: "auto", width: "128px" }}
                src={git}
                alt="html5"
              />
              <p className=" font-bold mt-2">Git</p>
            </div>

            {/* Skills progression */}
          </div>
          <section className="mt-16">
            <div className="bar  mt-2">
              <div className="flex justify-between mb-1">
                <span className="text-lg md:text-3xl font-medium text-white ">HTML</span>
                <span className="text-sm md:text-xl font-medium text-[#dc9e4b] border-[1px] rounded-md pl-2 pr-2 mb-2">
                  85%
                </span>
              </div>
              <div className="w-full bg-slate-700">
                <div
                  className="bg-[#dc9e4b] h-8 "
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            <div className="bar mt-2">
              <div className="flex justify-between mb-1">
                <span className="text-lg md:text-3xl font-medium text-white ">CSS</span>
                <span className="text-sm md:text-xl font-medium text-[#dc9e4b] border-[1px] rounded-md pl-2 pr-2 mb-2">
                  60%
                </span>
              </div>
              <div className="w-full bg-slate-700">
                <div
                  className="bg-[#dc9e4b] h-8 "
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
            <div className="bar mt-2">
              <div className="flex justify-between mb-1">
                <span className="text-lg md:text-3xl font-medium text-white ">
                  Bootstrap
                </span>
                <span className="text-sm md:text-xl font-medium text-[#dc9e4b] border-[1px] rounded-md pl-2 pr-2 mb-2">
                  85%
                </span>
              </div>
              <div className="w-full bg-slate-700">
                <div
                  className="bg-[#dc9e4b] h-8 "
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="bar mt-2">
              <div className="flex justify-between mb-1">
                <span className="text-lg md:text-3xl font-medium text-white ">
                  Javascript
                </span>
                <span className="text-sm md:text-xl font-medium text-[#dc9e4b] border-[1px] rounded-md pl-2 pr-2 mb-2">
                  70%
                </span>
              </div>
              <div className="w-full bg-slate-700">
                <div
                  className="bg-[#dc9e4b] h-8 "
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className="bar mt-2">
              <div className="flex justify-between mb-1">
                <span className="text-lg md:text-3xl font-medium text-white ">
                  Tailwind-CSS
                </span>
                <span className="text-sm md:text-xl font-medium text-[#dc9e4b] border-[1px] rounded-md pl-2 pr-2 mb-2">
                  65%
                </span>
              </div>
              <div className="w-full bg-slate-700">
                <div
                  className="bg-[#dc9e4b] h-8 "
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
            <div className="bar mt-2">
              <div className="flex justify-between mb-1">
                <span className="text-lg md:text-3xl font-medium text-white ">Reactjs</span>
                <span className="text-sm md:text-xl font-medium text-[#dc9e4b] border-[1px] rounded-md pl-2 pr-2 mb-2">
                  60%
                </span>
              </div>
              <div className="w-full bg-slate-700">
                <div
                  className="bg-[#dc9e4b] h-8 "
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
            <div className="bar mt-2">
              <div className="flex justify-between mb-1">
                <span className="text-lg md:text-3xl  font-medium text-white ">C++</span>
                <span className="text-sm md:text-xl font-medium text-[#dc9e4b] border-[1px] rounded-md pl-2 pr-2 mb-2">
                  85%
                </span>
              </div>
              <div className="w-full bg-slate-700">
                <div
                  className="bg-[#dc9e4b] h-8 "
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="bar mt-2">
              <div className="flex justify-between mb-1">
                <span className="text-lg md:text-3xl font-medium text-white ">MySQL</span>
                <span className="text-sm  md:text-xl font-medium text-[#dc9e4b] border-[1px] rounded-md pl-2 pr-2 mb-2">
                  85%
                </span>
              </div>
              <div className="w-full bg-slate-700">
                <div
                  className="bg-[#dc9e4b] h-8 "
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="bar mt-2">
              <div className="flex justify-between mb-1">
                <span className="text-lg md:text-3xl font-medium text-white ">Git</span>
                <span className="text-sm md:text-xl font-medium text-[#dc9e4b] border-[1px] rounded-md pl-2 pr-2 mb-2">
                  60%
                </span>
              </div>
              <div className="w-full bg-slate-700">
                <div
                  className="bg-[#dc9e4b] h-8 "
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </section>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="flex-col justify-items-center ml-3 p-3 mt-16 mb-8"
        >
          <div id="bgAnimation" className="border-l-2 border-[#dc9e4b] h-20">
            <div className="inner text-4xl font-bold text-[#dc9e4b] pl-5 pt-4 w-[250px] md:text-6xl md:w-[400px]">
              My Services
            </div>
          </div>
          <div className="text-white text-2xl mt-5 mb-5 md:text-4xl md:mt-12 ">
            <p>My services are</p>
            <hr className="mt-3  border-[#dc9e4b]" />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col mt-7 text-white ">
              <div className="text-center">
                <i
                  className="fa-solid fa-laptop-code fa-2x md:fa-4x mt-6 mb-6"
                  style={{ color: "#dc9e4b" }}
                ></i>
              </div>
              <div className="heading text-2xl font-bold mb-4 text-center md:text-5xl">
                Web Development
              </div>
              <div className="text-xl text-center text-center m-auto md:text-4xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus eligendi pariatur et accusamus ducimus rerum obcaecati
                saepe deleniti earum nesciunt eius molestiae esse repudiandae
                sit eveniet, officiis est illum doloremque?
              </div>
            </div>

            <div className="flex flex-col mt-12 text-white">
              <div className="text-center">
                <i
                  className="fa-solid fa-code fa-2x mt-6 mb-6"
                  style={{ color: "#dc9e4b" }}
                ></i>
              </div>
              <div className="heading text-2xl font-bold mb-4 text-center md:text-5xl">
                Programming in C++
              </div>
              <div className="text-xl text-center  md:text-4xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus eligendi pariatur et accusamus ducimus rerum obcaecati
                saepe deleniti earum nesciunt eius molestiae esse repudiandae
                sit eveniet, officiis est illum doloremque?
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className=" ml-3 p-3 mt-16 mb-8">
          <div id="bgAnimation" className="border-l-2 border-[#dc9e4b] h-20">
            <div className="inner text-4xl font-bold text-[#dc9e4b] pl-5 pt-4 w-[290px] md:text-6xl md:w-[400px]">
              My Projects
            </div>
          </div>
          <div className="text-white text-2xl mt-5 md:4xl md:text-4xl md:mt-12">
            <p>Here are some of my projects</p>
            <hr className="mt-3 border-[#dc9e4b]" />
          </div>

          <div className="grid grid-cols-1 text-white text-xl text-center  rounded-2xl pb-5 pt-3 mr-2 mt-4 mb-5 md:grid-cols-2 md:gap-4 md:text-4xl">
            <div className="text-center  bg-slate-700 rounded-2xl pb-5 pt-3 mr-6 mt-4 mb-5 md:mb-3">
              <a
                className=" font-md tracking-widest"
                href="http://tindog-dusky.vercel.app/"
                rel="noreferer"
                target="_blank"
              >
                Tindog
              </a>
            </div>
            <div className="text-center  bg-slate-700 rounded-2xl pb-5 pt-3 mr-2 mt-4 mb-5">
              {/* eslint-disable-next-line */}
              <a
                className=" font-md tracking-widest"
                href="http://textutils-react-coral.vercel.app/"
                rel="noreferer"
                target="_blank"
              >
                TextUtils
              </a>
            </div>
            <div className="text-center  bg-slate-700 rounded-2xl pb-5 pt-3 mr-2 mt-4 mb-5">
              {/* eslint-disable-next-line */}
              <a
                className=" font-md tracking-widest"
                href="http://allamalibrary.vercel.app/"
                rel="noreferer"
                target="_blank"
              >
                Allama Library
              </a>
            </div>
            <div className="text-center  bg-slate-700 rounded-2xl pb-5 pt-3 mr-2 mt-4 mb-5">
              {/* eslint-disable-next-line */}
              <a
                className=" font-md tracking-widest"
                href="http://drumkit-kappa-swart.vercel.app/"
                target="_blank"
              >
                Drumkit
              </a>
            </div>
            <div className="text-center  bg-slate-700 rounded-2xl pb-5 pt-3 mr-2 mt-4 mb-5">
              {/* eslint-disable-next-line */}
              <a
                className=" font-md tracking-widest"
                href="https://github.com/EhtishamSattar/iNoteBook.github.io"
                target="_blank"
              >
                Inotebook
              </a>
            </div>
          </div>
        </section>

        {/* Contact section */}

        <section
          id="contact"
          className="flex-col justify-items-center ml-3 p-3 mt-16 mb-8"
        >
          <div id="bgAnimation" className="border-l-2 border-[#dc9e4b] h-20">
            <div className="inner text-4xl font-bold text-[#dc9e4b] pl-5 pt-7 w-[200px] md:text-6xl ">
              Contact
            </div>
          </div>
          <div className="text-white text-2xl mt-5 md:text-4xl md:mt-12">
            <p>Here is my phone number</p>
            <hr className="mt-3 border-[#dc9e4b]" />
            <div className="mt-10 mb-10 w-80 h-32 bg-slate-700 rounded-lg md:h-40 md:w-[400px] md:text-4xl">
              <div className="text-start pt-4 pl-4 font-semibold tracking-wider md:m">
                <p>
                  <i
                    class="fa-solid fa-phone fa-1x mr-3 mb-5"
                    style={{ color: "lightgreen" }}
                  ></i>
                  03248529976
                </p>
                <p className="text-[#dc9e4b] mt-3">Green Town , Lahore</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* footer */}

      <div className="footer bg-slate-700 h-24">
        <div className="flex flex-row justify-center pt-7 pb-7">
          <a href="https://www.facebook.com/" target="_blank">
            <i
              className="fa-brands fa-facebook fa-2x "
              style={{ marginLeft: "20px" }}
            >
              {" "}
            </i>
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <i
              className="fa-brands fa-linkedin fa-2x"
              style={{ marginLeft: "20px" }}
            ></i>
          </a>
          <a href="https://github.com/EhtishamSattar" target="_blank">
            <i
              className="fa-brands fa-github fa-2x"
              style={{ marginLeft: "20px" }}
            ></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Page;