import React, { useState } from "react";
// import { Button } from "../Button/Button";
// import { Card } from "../Card/Card";
import {
  Card,
} from "@/components/ui/card"
import avatars from "./avatars.png";
import bg2 from "./bg-2.svg";
import bg3 from "./bg-3.svg";
import bg from "./bg.svg";
import button3 from "./button-3.svg";
import button from "./button.svg";
import button1 from "./button4.svg";
import unionIcon from "./Union.png";
import rightsidebutton from "./right-card-button.svg";
import rewriteImage from "./Frame-rewrite.svg";
import frame77 from "./frame-77.svg";
import frame from "./frame.svg";
import group2 from "./group-2.png";
import group from "./group.png";
import sphere from "./sphere.png";
import union from "./union.svg";
import sunIcon from './sun-svgrepo-com.svg';     
import moonIcon from './moon-moon-svgrepo-com.svg';  
import { ToggleCard } from "@/pages/_components/ToggleCard";
export const TemplateExample = () => {
    const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(prev => !prev);
  return (
   <div className="w-full min-h-screen bg-[#03061c] ">
   <header className={`w-full ${isDark ? 'bg-[#1A1D3B]' : 'bg-gray-100'} py-4 px-6 flex justify-between items-center shadow-md`}>
        <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>AI Template Builder</h1>
        
        <button onClick={toggleTheme} className="">
          <img src={isDark ? sunIcon : moonIcon} alt="Toggle Theme" className="w-6 h-6" />
        </button>
         <nav className={`space-x-4 text-sm md:text-base ${isDark ? 'text-white' : 'text-black'}`}>
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Templates</a>
          <a href="#" className="hover:underline">About</a>
        </nav>
      </header>
    <main className={`transition-colors duration-300 ${isDark ? 'bg-[#03061c]' : 'bg-white'} w-full`}>
      <section className="relative w-full h-[900px]">
        {/* Top Right Card */}
        {/* <img
          className="absolute top-8 left-[906px] w-[262px] h-[157px]"
          src={card2}
          alt="Card"
        /> */}
        <div className="absolute top-8 left-[906px] w-[262px]  h-auto">
          <ToggleCard />
        </div>

        {/* <ToggleCard /> */}
        {/* Created Prompts Card */}
       <article className="absolute top-[217px] left-[906px] w-[262px] h-[211px] flex flex-col items-center justify-center gap-6 px-8 pt-[34px] pb-8 border border-[#ffffff0d] rounded-3xl bg-[url(/card-3.svg)] bg-cover bg-center bg-[#1A1D3B] bg-blend-overlay">

          <h2 className="relative text-[62px] font-semibold leading-[56px] tracking-[-1.24px] text-transparent bg-gradient-to-b from-[#f4f1ff] to-[#6633ee] bg-clip-text text-center whitespace-nowrap">
            25M
          </h2>
          <div className="relative w-[196px] h-10">
            <div className="relative w-[198px] h-10">
              <div className="absolute top-0 left-[5px] w-[188px] h-10 bg-gradient-to-b from-[rgba(177,147,255,0.1)] to-[rgba(78,43,172,0.2)]" />
              <img
                className="absolute top-0 left-0 w-2.5 h-10"
                src={union}
                alt="Union"
              />
              <img
                className="absolute top-0 left-[188px] w-2.5 h-10"
                src={union}
                alt="Union"
              />
              <p className="absolute top-3 left-[26px] text-lg text-[#b1a0fc] text-center leading-7 whitespace-nowrap">
                created prompts
              </p>
            </div>
          </div>
        
        </article>

        {/* Center Main Card */}
        <section className="absolute top-8 left-[322px] w-[556px] h-[836px]">
          <div className="absolute top-0 left-0 w-[556px] h-[396px] flex flex-col items-center gap-8 rounded-3xl">
            <img
              className="absolute top-0 left-0 w-full h-full"
              src={bg3}
              alt="Background"
            />          
            <img className="relative w-[452px]" src={frame} alt="Frame" />
          </div>

          
          <article className="
              absolute 
              md:top-[424px] top-[calc(50%+200px)] 
              md:left-0 left-1/2 
              md:w-[264px] w-[90%] max-w-[264px] 
              md:h-[412px] h-[calc(412px*0.8)] 
              flex flex-col items-start justify-end gap-1 
              px-4 md:px-8 py-4 md:py-7 
              overflow-hidden rounded-3xl 
              transform md:translate-x-0 -translate-x-1/2
              z-10
            ">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={bg}
              alt="Background"
            />
            <img
              className="absolute top-0 left-0 w-[20%] md:w-[98px] h-[30%] md:h-[166px] object-contain"
              src={group}
              alt="Group"
            />
         
            <div className="absolute bottom-0 left-0 w-full h-[170px] flex items-center justify-center p-6">
              <img
                className="absolute top-0 left-0 w-[73px] h-[52px]"
                src={unionIcon}
                alt="Union Background"
              />
              <img
                className="absolute w-[54px] h-[42px] left-[19px] top-[4px]"
                src={button1}
                alt="Button 1"
              />
               <div className="relative z-10 text-left self-start left-[0px] top-[40px]">
                <h3 className="text-xl font-semibold text-white leading-snug">
                  Branching paths
                </h3>
                <p className="text-[#ac9fe4] text-sm leading-snug">
                  Explore multiple prompt<br />
                  directions with branching
                </p>
              </div>
            </div>


          </article>
          {/* Right Card */}
          <article className="absolute top-[424px] left-[292px] w-[264px] h-[412px] flex flex-col items-start justify-end gap-1 px-8 py-7 overflow-hidden rounded-3xl">
            <img
              className="absolute top-0 left-0 w-full h-full"
              src={bg2}
              alt="Background"
            />
          
            <img
              className="absolute top-0 left-[164px] w-[100px] h-[168px]"
              src={group2}
              alt="Group"
            />
            <div className="absolute bottom-0 left-0 w-full h-[170px] flex items-center justify-center p-6">
              <img
                className="absolute top-0 left-0 w-[73px] h-[52px]"
                src={unionIcon}
                alt="Union Background"
              />
              <img
                className="absolute w-[54px] h-[42px] left-[19px] top-[4px]"
                src={rightsidebutton}
                alt="Button 1"
              />
              <div className="relative z-10 text-left self-start left-[0px] top-[40px]">
                <h3 className="text-xl font-semibold text-white leading-snug">
                  Branching paths
                </h3>
                <p className="text-[#ac9fe4] text-sm leading-snug">
                  Explore multiple prompt<br />
                  directions with branching
                </p>
              </div>
            </div>

          
          </article>

          {/* Center Sphere */}
          <div className="absolute top-[235px] left-[94px] w-[368px] h-[368px]">
            <div className="relative h-full">
              <div className="absolute top-1 left-2 w-[352px] h-[145px] bg-[url(/CODE.svg)] bg-contain" />
              <div className="absolute top-0 left-0 w-full h-full bg-[url(/image.svg)] bg-contain" />
            </div>
          </div>

          {/* Background Spheres */}
         
          <img
            className="absolute top-[283px] left-[143px] w-[270px] h-[270px]"
            src={sphere}
            alt="Sphere"
          />
        </section>

        {/* Left Top Card */}
        {/* Left Top Card with Toggle Card Style */}
        <article className="absolute top-8 left-8 w-[262px] h-[396px] flex flex-col justify-between p-8 rounded-3xl bg-[#1A1D3B] border border-[#ffffff0d] shadow-lg">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-semibold leading-10 tracking-[-0.36px] text-transparent bg-gradient-to-b from-white to-[#a99cfb] bg-clip-text">
              Create your&nbsp;&nbsp;own <br />
              template
            </h2>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-[#e6e3ff] leading-7">
              14 days trial
            </span>
            <span className="text-base text-[#ac9fe4] leading-6">
              after – $5/month
            </span>
          </div>
        </article>


        {/* Top Users Card */}
        <article className="absolute top-[456px] left-8 w-[262px] h-[220px] flex flex-col items-center justify-center gap-5 px-8 pt-[34px] pb-[30px] border border-[#ffffff0d] rounded-3xl bg-[#1A1D3B] shadow-lg">
          <div className="flex flex-col items-center gap-3 w-full">
            <h2 className="text-[62px] font-semibold leading-[56px] tracking-[-1.24px] text-transparent bg-gradient-to-b from-[#ffb266] via-[#e9766f] to-[#c04350] bg-clip-text text-center">
              20
            </h2>
            <p className="text-lg text-[#b1a0fc] text-center leading-7">
              Top&nbsp;&nbsp;Users
            </p>
          </div>
          <img src={avatars} alt="Avatars" />
        </article>


        {/* Card Component */}
        <article className="absolute left-8 top-[704px] w-[262px] h-[157px] rounded-[20px] bg-[#1A1D3B] shadow-lg flex items-center justify-center p-4">
          <button  style={{ borderRadius: "73px" }} className="w-full max-w-[200px] h-[48px] flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#a66cff] to-[#6947ff] text-white font-semibold text-base shadow-md transition-transform duration-200 hover:scale-105 active:scale-95">
           
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C10.8954 2 10 2.89543 10 4H4C2.89543 4 2 4.89543 2 6V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V8C22 6.89543 21.1046 6 20 6H14C14 4.89543 13.1046 4 12 4C12 2.89543 11.1046 2 10 2H12ZM9 14L11.25 17.15L14.5 13L19 19H5L9 14Z" />
            </svg>
            Generate
          </button>
        </article>


        {/* Prompt Service Card */}
        <article className="absolute top-[456px] left-[906px] w-[262px] h-[412px] flex flex-col justify-between items-center pt-7 pb-6 px-8 border border-[#ffffff0d] rounded-3xl bg-[#1A1D3B] shadow-md">
          <div className="flex flex-col items-start gap-2 w-full">
            <h3 className="text-lg font-bold text-[#e6e3ff] leading-7">
              Prompt Service
            </h3>
            <p className="text-base text-[#ac9fe4] leading-6">
             Use pre-made templates to jumpstart creativity.
            </p>
          </div>
          <div className="relative w-[206px] h-[261.75px] overflow-hidden">
            <div className="relative top-[65px] h-[196px]">
              <div className="absolute top-[73px] left-[85px] flex items-center justify-center gap-3 p-5 h-12 border border-[#ffffff0d] bg-[#626ab52e] rounded-full -rotate-90">
                {[
                  { color: "#c883fb", label: "JPG" },
                  { color: "#ffb266", label: "PNG" },
                  { color: "#44b7ff", label: "PDF" },
                ].map(({ color, label }) => (
                  <div key={label} className="flex items-center gap-1">
                    <span
                      className="w-2.5 h-2.5 rounded-[5px]"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-sm font-medium text-[#ddd6ff] tracking-[0.42px] leading-[34px]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <img
                className="absolute top-[97px] left-[51px] w-[108px] h-[99px]"
                src={frame77}
                alt="Frame"
              />
              <img
                className="absolute top-32 left-0 w-[74px] h-[69px]"
                src={button3}
                alt="Button"
              />
               <img
                 className="absolute left-[-5px] top-[15px]"

                src={rewriteImage}
                alt="Button"
              />
              {/* <button
                className="absolute left-[-5px] top-[53px]"
                color="default"
                size="medium"
              /> */}
              <img
                className="absolute top-[46px] left-[84px] w-[76px] h-[76px]"
                src={button}
                alt="Button"
              />
            </div>
          </div>
        </article>
      </section>
    </main>
      {/* Footer */}
       <footer className={`w-full ${isDark ? 'bg-[#1A1D3B]' : 'bg-gray-100'} py-4 px-6 mt-10 text-center text-sm ${isDark ? 'text-[#ac9fe4]' : 'text-gray-700'}`}>
        © {new Date().getFullYear()} AI Template Builder. All rights reserved.
      </footer>
    </div>
  );
};
