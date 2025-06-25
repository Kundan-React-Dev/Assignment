import { useState } from "react";
import { Card, CardContent, CardTitle } from "../components/ui/card";

import aa11 from "../assets/aa 1 1.png";
import bg5 from "../assets/bg.png";
import avatars from "../assets/avatars.png";
import bg2 from "../assets/bg-2.svg";
import bg3 from "../assets/bg-3.svg";
import bg from "../assets/bg.svg";
import button3 from "../assets/button-3.svg";
import button from "../assets/button.svg";
import button1 from "../assets/button4.svg";
import unionIcon from "../assets/Union.png";
import rightsidebutton from "../assets/right-card-button.svg";
import rewriteImage from "../assets/Frame-rewrite.svg";
import frame77 from "../assets/frame-77.svg";
import frame from "../assets/frame.svg";
import group2 from "../assets/group-2.png";
import group from "../assets/group.png";
import sphere from "../assets/sphere.png";
import union from "../assets/union.svg";
import sunIcon from '../assets/sun-svgrepo-com.svg';
import moonIcon from '../assets/moon-moon-svgrepo-com.svg';
import { ToggleCard } from "@/pages/_components/ToggleCard";

export const TemplateExample = () => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(prev => !prev);
  const [activeIndex, setActiveIndex] = useState(1);


  const templates = [
    {
      id: "left",
      title: "Template 1",
      subtitle: "Basic Prompt",
      frameImage: frame,
      bgImage: bg5,
      width: "213px",
      height: "206px",
      containerWidth: "418px",
      containerHeight: "298px",
    },
    {
      id: "center",
      title: "Your AI Prompt",
      subtitle: "Prompts templates",
      description: "Use pre-made templates to jumpstart creativity.",
      frameImage: frame,
      bgImage: bg5,
      width: "453.25px",
      height: "206px",
      containerWidth: "542px",
      containerHeight: "386px",
    },
    {
      id: "right",
      title: "Template 3",
      subtitle: "Advanced Options",
      frameImage: frame,
      bgImage: bg5,
      width: "184px",
      height: "206px",
      containerWidth: "418px",
      containerHeight: "298px",
    },
  ];

  const handlePrevious = () => {
    setActiveIndex(prev => (prev === 0 ? templates.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === templates.length - 1 ? 0 : prev + 1));
  };

  // Calculate positions for each card
  const getCardPosition = (index: any) => {
    const centerIndex = activeIndex;
    const distance = index - centerIndex;

    // Handle wrap-around for circular carousel
    const adjustedDistance = distance > 1 ? distance - templates.length :
      distance < -1 ? distance + templates.length :
        distance;

    if (adjustedDistance === 0) {
      // Center card
      return {
        left: "587px",
        top: "165px",
        width: "542px",
        height: "386px",
        zIndex: 10,
        opacity: 1,
        blur: false
      };
    } else if (adjustedDistance === -1 || adjustedDistance === templates.length - 1) {
      // Left card
      return {
        left: "100px",
        top: "209px",
        width: "418px",
        height: "298px",
        zIndex: 5,
        opacity: 0.4,
        blur: true
      };
    } else {
      // Right card
      return {
        left: "1185px",
        top: "209px",
        width: "418px",
        height: "298px",
        zIndex: 5,
        opacity: 0.4,
        blur: true
      };
    }
  };

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

          <div className="absolute top-8 left-[906px] w-[262px]  h-auto">
            <ToggleCard />
          </div>


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
            <button style={{ borderRadius: "73px" }} className="w-full max-w-[200px] h-[48px] flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#a66cff] to-[#6947ff] text-white font-semibold text-base shadow-md transition-transform duration-200 hover:scale-105 active:scale-95">

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

                <img
                  className="absolute top-[46px] left-[84px] w-[76px] h-[76px]"
                  src={button}
                  alt="Button"
                />
              </div>
            </div>
          </article>
        </section>


        <div className={`${isDark ? '' : 'bg-gray-100'} relative w-full h-[800px] overflow-hidden`}>

         
          <div className="absolute  flex flex-col w-[532px] h-[532px] left-[285px] items-center justify-center gap-8 top-[209px] rounded-3xl blur-[7px] opacity-40">
            <div className="relative w-full h-full">
              <img
                className="absolute w-[513px] h-[598px] top-[-46px] left-[-0px] rounded-3xl"
                alt="Bg"
                src={sphere}
              />
            
            </div>
          </div>

          {/*  Main Center Card (Template AI) */}
          <div className="absolute top-[240px] -translate-x- z-20 w-[400px] h-[205px] right-[100px]">
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              <img
                className="absolute w-full h-full object-cover rounded-3xl"
                alt="Bg"
                src={bg5}
              />
              <div className="absolute inset-0 bg-black/30 z-10 rounded-3xl" />
              <div className="relative z-20 p-6 h-full flex flex-col justify-center text-white">
                <h2 className="text-xl font-semibold">Your AI Prompt Companion</h2>
                <p className="text-sm text-gray-300 mt-1">
                  Explore multiple prompt directions with branching.
                </p>
                <p className="text-xs text-gray-200 mt-2">Start from 2023</p>
              </div>
            </div>
          </div>

          {/*  Card 1 - Left */}
          <div className="absolute top-[480px] left-[100px] w-[326px] h-[183px] bg-white/10 backdrop-blur-[100px] rounded-[28.51px] p-6 z-10">
            <div className="bg-gradient-to-b from-[#ffb88c] to-[#ff7c7c] bg-clip-text text-transparent font-bold text-[32px] leading-normal blur-sm">
              DesignFlow, UX Analyst
            </div>
          </div>

          {/*  Card 2 - Right */}
          <div className="absolute top-[120px] left-[100px] w-[326px] h-[183px] bg-white/10 backdrop-blur-[100px] rounded-[28.51px] p-6 z-10">
            <div className="bg-gradient-to-b from-[#8498ff] to-[#5b34d1] bg-clip-text text-transparent font-bold text-[36.7px] leading-normal blur-sm">
              GrowthDay, UI/UX Designer
            </div>
          </div>

          {/*  Accent Vertical Line */}
          <div className="absolute w-6 h-[448px] top-[149px] left-1/2 -translate-x-1/2 z-10">
            <div className="absolute w-1 h-full top-0 left-2.5 rounded-[20px] bg-gradient-to-b from-transparent via-[#9972fd] to-transparent" />
            <div className="absolute w-6 h-6 top-[216px] left-0 rounded-xl bg-[#9a73fd]" />
          </div>

        </div>
        <div className={`${isDark ? '' : 'bg-gray-100'} flex flex-row justify-center w-full`}>
          <div className={`${isDark ? '' : 'bg-gray-100'} border-[40px] border-solid border-transparent  w-[1024px] h-[768px] relative`}>
            <div className="top-[-373px] left-[-363px] absolute w-[1387px] h-[1100px]">
              {/* <div > */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[532px] h-[532px] pointer-events-none z-0">
                <img
                  src={sphere}
                  alt="Sphere"
                  className="w-full h-full blur-[70px] opacity-60"
                />
              </div>

              {/* <div className="absolute w-[1024px] h-[900px] top-[373px] left-[363px] overflow-x-scroll" /> */}

              <div className="flex flex-col w-[437px] h-[505px] items-start gap-3 p-[30px] absolute top-[518px] left-[674px] rounded-[35px] overflow-hidden rotate-[14.98deg] [background:radial-gradient(50%_50%_at_50%_50%,rgba(154,114,253,0.1)_0%,rgba(255,255,255,0.1)_100%)]">
                <div className="w-[312px] h-[312px] top-[66px] left-[239px] rounded-[156px] bg-[linear-gradient(180deg,rgba(107,96,234,0.3)_0%,rgba(194.85,117.88,196.15,0.3)_100%)] absolute blur-[54px]" />

                <div className="w-[196px] h-[196px] top-[392px] left-[79px] rounded-[98px] bg-[linear-gradient(180deg,rgba(255,200.65,83.37,0.5)_0%,rgba(191.25,124.31,0,0.12)_100%)] absolute blur-[54px]" />

                <div className="flex flex-col w-[361px] h-[402px] items-start gap-5 relative">
                  <div className="flex flex-col h-[458px] items-center justify-center gap-3.5 relative self-stretch w-full mb-[-56.00px]">
                    <img
                      className="relative w-[230.18px] h-[280.42px] rotate-[-14.98deg] object-cover"
                      alt="Aa"
                      src={aa11}
                    />

                    <div className="absolute w-[312px] h-[111px] top-[257px] left-[39px] rounded-[156px/55.5px] blur-[54px] bg-[linear-gradient(180deg,rgb(107,96,234)_0%,rgb(194.85,117.88,196.15)_100%)]" />

                    <div className="relative w-[319px] [font-family:'Acumin_Pro-Bold',Helvetica] font-bold text-white text-[42px] text-center tracking-[0] leading-[normal]">
                      Monye Matt
                    </div>
                  </div>
                </div>

                <div className="absolute w-[362px] top-[528px] left-10 [-webkit-text-stroke:1px_#ffffff4c] [font-family:'Lufga-Bold',Helvetica] font-bold text-transparent text-[85px] tracking-[0] leading-[normal] whitespace-nowrap">
                  AWARDS
                </div>
              </div>

              <div className="flex flex-col w-[437px] h-[505px] items-start gap-3 p-[30px] absolute top-[508px] left-[674px] rounded-[35px] overflow-hidden rotate-[-9.93deg] [background:radial-gradient(50%_50%_at_50%_50%,rgba(154,114,253,0.1)_0%,rgba(255,255,255,0.1)_100%)]">
                <div className="w-[312px] h-[312px] top-[66px] left-[239px] rounded-[156px] bg-[linear-gradient(180deg,rgba(107,96,234,0.3)_0%,rgba(194.85,117.88,196.15,0.3)_100%)] absolute blur-[54px]" />

                <div className="w-[196px] h-[196px] top-[392px] left-[79px] rounded-[98px] bg-[linear-gradient(180deg,rgba(255,200.65,83.37,0.5)_0%,rgba(191.25,124.31,0,0.12)_100%)] absolute blur-[54px]" />

                <div className="flex flex-col w-[361px] h-[402px] items-start gap-5 relative">
                  <div className="flex flex-col h-[458px] items-center justify-center gap-3.5 relative self-stretch w-full mb-[-56.00px]">
                    <img
                      className="w-[212.48px] h-[270.17px] rotate-[9.93deg] relative object-cover"
                      alt="Aa"
                      src={aa11}
                    />

                    <div className="absolute w-[312px] h-[111px] top-[257px] left-[39px] rounded-[156px/55.5px] blur-[54px] bg-[linear-gradient(180deg,rgb(107,96,234)_0%,rgb(194.85,117.88,196.15)_100%)]" />

                    <div className="relative w-[319px] [font-family:'Acumin_Pro-Bold',Helvetica] font-bold text-white text-[42px] text-center tracking-[0] leading-[normal]">
                      Monye Matt
                    </div>
                  </div>
                </div>

                <div className="absolute w-[362px] top-[528px] left-10 [-webkit-text-stroke:1px_#ffffff4c] [font-family:'Lufga-Bold',Helvetica] font-bold text-transparent text-[85px] tracking-[0] leading-[normal] whitespace-nowrap">
                  AWARDS
                </div>
              </div>

              <div className="flex flex-col w-[437px] h-[505px] items-center gap-2.5 p-[30px] absolute top-[541px] left-[649px] rounded-[35px] overflow-hidden backdrop-blur-[130px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(130px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(154,114,253,0.1)_0%,rgba(255,255,255,0.1)_100%)]">
                <div className="w-[312px] h-[312px] top-[66px] left-[239px] rounded-[156px] bg-[linear-gradient(180deg,rgba(107,96,234,0.3)_0%,rgba(194.85,117.88,196.15,0.3)_100%)] absolute blur-[54px]" />

                <div className="w-[196px] h-[196px] top-[392px] left-[79px] rounded-[98px] bg-[linear-gradient(180deg,rgba(255,200.65,83.37,0.5)_0%,rgba(191.25,124.31,0,0.12)_100%)] absolute blur-[54px]" />

                <div className="relative self-stretch bg-[linear-gradient(180deg,rgb(255,178.5,102)_0%,rgb(233,118,111)_48.96%,rgb(192,67,80)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Plus_Jakarta_Sans-SemiBold',Helvetica] font-semibold text-transparent text-[62px] text-center tracking-[-1.24px] leading-[56px]">
                  20k Use
                </div>

                <div className="flex flex-col w-[343px] h-[382px] items-start gap-5 relative">
                  <div className="flex flex-col h-[458px] items-center justify-center gap-3.5 relative self-stretch w-full mb-[-76.00px]">
                    <div className="absolute w-[248px] h-[260px] top-[88px] left-[52px] rounded-[124px/130px] blur-[54px] bg-[linear-gradient(180deg,rgba(168.94,161.49,255,0.5)_0%,rgba(253.91,189.35,255,0.5)_100%)]" />

                    <img
                      className="w-[173px] h-[244px] relative object-cover"
                      alt="Aa"
                      src={aa11}
                    />

                    <div className="absolute w-[312px] h-[111px] top-[257px] left-[39px] rounded-[156px/55.5px] blur-[54px] bg-[linear-gradient(180deg,rgb(107,96,234)_0%,rgb(194.85,117.88,196.15)_100%)]" />

                    <div className="relative w-[319px] [font-family:'Acumin_Pro-Bold',Helvetica] font-bold text-white text-[42px] text-center tracking-[0] leading-[normal]">
                      Monye Matt
                    </div>
                  </div>
                </div>

                <div className="absolute w-[362px] top-[528px] left-10 [-webkit-text-stroke:1px_#ffffff4c] [font-family:'Lufga-Bold',Helvetica] font-bold text-transparent text-[85px] tracking-[0] leading-[normal] whitespace-nowrap">
                  AWARDS
                </div>
              </div>
            </div>
          </div>
        </div>

     <div className="relative top-[31px] left-[-205px] w-[1463px] h-[732px] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Background sphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[532px] h-[532px] pointer-events-none z-0">
          <img
            src={sphere}
            alt="Sphere"
            className="w-full h-full blur-[70px] opacity-60"
          />
        </div>

        {/* Cards Container */}
        <div className="relative w-full h-full">
          {templates.map((template, index) => {
            const position = getCardPosition(index);
            return (
              <div
                key={template.id}
                className={`absolute transition-all duration-500 ease-in-out ${position.blur ? 'blur-[7px]' : ''}`}
                style={{
                  left: position.left,
                  top: position.top,
                  width: position.width,
                  height: position.height,
                  zIndex: position.zIndex,
                  opacity: position.opacity
                }}
              >
                <div className="w-full h-full rounded-3xl border-none overflow-hidden relative">
                  <img
                    className="absolute w-full h-full top-0 left-0 rounded-3xl object-cover"
                    alt="Background"
                    src={template.bgImage}
                  />
                  <div className="absolute inset-0 bg-black/30 z-10 rounded-3xl" />

                  {/* Content Container */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4">
                    {/* Decorative elements */}
                    <img
                      className="absolute top-[60px] left-0 w-[73px] h-[52px] z-30"
                      src={unionIcon}
                      alt=""
                    />
                    <img
                      className="absolute w-[60px] h-[60px] left-[17px] top-[55px] z-30"
                      src={button}
                      alt=""
                    />

                    {/* Text content */}
                    <div className="relative z-40 text-center space-y-2">
                      <h2 className="text-white text-4xl font-bold">
                        {template.title || "Template Title"}
                      </h2>
                      <p className="text-white text-4xl font-bold">
                        {template.subtitle || "Template Subtitle"}
                      </p>
                      <p className="text-sm text-gray-300 mt-4">
                        Use pre-made templates to jumpstart creativity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={handlePrevious}
          className="absolute text-white top-[316px] left-[438px] cursor-pointer z-20"
        >
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute text-white top-[321px] left-[1221px] cursor-pointer z-20"
        >
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
          </svg>
        </button>
      </div>
    </div>
        
      </main>
      {/* Footer */}
      <footer className={`w-full ${isDark ? 'bg-[#1A1D3B]' : 'bg-gray-100'} py-4 px-6 mt-10 text-center text-sm ${isDark ? 'text-[#ac9fe4]' : 'text-gray-700'}`}>
        © {new Date().getFullYear()} AI Template Builder. All rights reserved.
      </footer>
    </div>
  );
};
