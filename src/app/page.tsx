"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import Brand1 from '@/images/brand-01.png';
import Brand2 from '@/images/brand-02.png';
import Brand3 from '@/images/brand-03.png';
import Brand4 from '@/images/brand-04.png';
import Brand5 from '@/images/brand-05.png';
import Brand6 from '@/images/brand-06.png';
import Digital from "@/images/digitalPicture.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { CiMobile1 } from "react-icons/ci";
import { FaChromecast } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { IoLayersOutline } from "react-icons/io5";
import ArtWorld from "../images/ArtWorld.png";
import Background from '../images/Background.jpg';
import FoodHub from "../images/FoodHub.png";
import Rorcars from "../images/Rorcars.png";
import Entrance from "../lottiFiles/Animation - Entrance.json";
import CardContainer from "./_components/CardContainer";
import "./globals.css";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [entrance, setEntrance] = useState(true);
  const [heroSection, setHeroSection] = useState(false);
  const images = [Rorcars, ArtWorld, FoodHub];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  useEffect(()=>{
    setTimeout(()=>{
      setEntrance(false)
      setHeroSection(true)
    }, 3700)
  }, [])

  return (
    <>
      {entrance && (
        <>
          <div className="fixed top-0 bottom-0 left-0 right-0 bg-white z-50 flex items-center justify-center">
            <div className="sm:h-full sm:w-full md:h-[50vh] md:w-[70vh] flex items-center justify-center">
              <Lottie animationData={Entrance} />
            </div>
          </div>
        </>
      )}

      {heroSection && (
        <>
          <Navbar data-aos='fade-in'/>
          <main
            data-aos="fade-in"
            className="main-section overflow-hidden flex w-full min-h-screen flex-col bg-black items-center justify-center text-white mb-32 font-[Poppins]"
            style={{ backgroundImage : `url(${Background.src})` }}
          >
            <h1 data-aos='fade-up' data-aos-delay= '250' className="p-3 text-7xl font-extrabold mb-5 bg-gradient-to-r from-[#E01C34] to-[#ACABB0] bg-clip-text text-transparent">
              Digital Excellence
            </h1>

            <h2 data-aos='fade-up' data-aos-delay= '500' className="text-2xl font-light mb-7">
              Empowering Brands with Custom Development and Strategic Marketing
            </h2>

            <Link href="/contact">
              <button data-aos='fade-up' data-aos-delay= '750' className="border border-white rounded w-36 h-14 hover:bg-[#f9004d] hover:border-none duration-700 text-lg font-[Poppins]">
                Contact Us
              </button>
            </Link>
          </main>

          <section className="flex justify-center gap-11 mb-32">
            <div className="w-4/12" data-aos="fade-right">
              <Image
                src={Digital}
                alt="Image"
                className="w-[35rem] h-[40rem] object-cover rounded-xl"
              />
            </div>

            <div className="flex flex-col gap-8 w-[37%]" data-aos="fade-left">
              <p className="text-[#ea001e] text-lg">About us</p>
              <h1 className="text-3xl font-bold leading-10">
                Empowering Brands with Innovative Digital Solutions and
                Strategic Insights.
              </h1>
              <h2 className="leading-6 text-lg text-[#717173]">
                From concept to launch, we blend creativity and technology to
                deliver exceptional digital experiences. Our integrated approach
                combines custom development, strategic marketing, and insightful
                reporting to drive growth and maximize impact.
              </h2>
              <div className="flex justify-between mt-5">
                <hr className="w-2/12 h-[2px] bg-[#E01C34] rounded" />
                <hr className="w-2/12 h-[2px] bg-[#E01C34] rounded" />
                <hr className="w-2/12 h-[2px] bg-[#E01C34] rounded" />
              </div>
              <div className="flex items-center justify-between mt-9">
                <div className="flex flex-col text-center">
                  <p className="text-[#E01C34] text-lg font-[Poppins] mb-5">
                    AWARDS
                  </p>
                  <CountUp
                    start={0}
                    end={800}
                    duration={4}
                    suffix="+"
                    className="number-style"
                  />
                </div>
                <div className="flex flex-col text-center">
                  <p className="text-[#E01C34] text-lg font-[Poppins] mb-5">
                    HAPPY CLIENTS
                  </p>
                  <CountUp
                    start={0}
                    end={1200}
                    duration={3}
                    suffix="+"
                    className="number-style"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#E01C34] text-lg font-[Poppins] mb-5">
                    YEARS OF EXPERIENCE
                  </p>
                  <CountUp
                    start={0}
                    end={12}
                    duration={5}
                    suffix="+"
                    className="number-style"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center justify-center gap-16 mb-20">
            <div className="flex flex-col text-center gap-5">
              <p className="text-[#E01C34]" data-aos="fade-up">OUR POPULAR SERVICES</p>
              <p className="text-4xl font-bold" data-aos="fade-up" data-aos-delay="250">
                We Take care of your buisness
              </p>
              <p className="text-xl text-[#717173]"  data-aos="fade-up" data-aos-delay="500">
                We provide comprehensive solutions to nurture <br /> and grow
                your business
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 bg-[#8db8ad1c] p-5 mb-20 rounded"  data-aos="fade-in" data-aos-delay="750">
              <CardContainer
                Icon={FaChromecast}
                title="Buisness Strategy"
                descriptions="Guiding businesses towards success through strategic planning and execution."
              />
              <CardContainer
                Icon={IoLayersOutline}
                title="Website Devloppement"
                descriptions="Building dynamic websites that captivate, engage, and drive results."
                
              />
              <CardContainer
                Icon={FiUsers}
                title="Marketing & Reporting"
                descriptions="Unlocking business potential with data-driven marketing and insightful reporting."
               
              />
              <CardContainer
                Icon={CiMobile1}
                title="Mobile Devloppement"
                descriptions="Crafting mobile solutions that elevate user experiences and drive business growth."
                
              />
            </div>
          </section>

          <section className="flex flex-col items-center gap-5">
            <h1 className="text-[#E01C34]"  data-aos="fade-up">QUALITY IS OUR BEAUTY</h1>
            <h2 className="text-4xl font-bold mb-8"  data-aos="fade-up" data-aos-delay="250">
              We Make Beautifull Things
            </h2>

            <div className="flex items-center justify-center gap-2 mb-32"  data-aos="fade-in" data-aos-delay="500">
              <div className="w-8/12">
                <Image
                  src={images[index]}
                  alt="Projects"
                  className="w-full h-full rounded-lg mb-6 duration-1000"
                />
                <div className="flex items-center justify-center gap-6">
                  <div
                    className={`w-[15px] h-[15px] border border-black rounded-full duration-1000 cursor-pointer ${index === 0 ? "bg-black" : " "}`}
                    onClick={() => setIndex(0)}
                  ></div>
                  <div
                    className={`w-[15px] h-[15px] border border-black rounded-full duration-1000 cursor-pointer ${index === 1 ? "bg-black" : " "}`}
                    onClick={() => setIndex(1)}
                  ></div>
                  <div
                    className={`w-[15px] h-[15px] border border-black rounded-full duration-1000 cursor-pointer ${index === 2 ? "bg-black" : " "}`}
                    onClick={() => setIndex(2)}
                  ></div>
                </div>
              </div>
            </div>
          </section>

          <TeamSection  />

          <div className="w-full flex items-center justify-center">
            <div className="flex w-[70rem] items-center justify-center flex-wrap gap-20 mb-24">
              <Image  src={Brand1} alt='brand Logo' className="brands" data-aos="fade-down"/>
              <Image  src={Brand2} alt='brand Logo' className="brands" data-aos="fade-down" data-aos-delay="250"/>
              <Image  src={Brand3} alt='brand Logo' className="brands" data-aos="fade-down" data-aos-delay="500"/>
              <Image  src={Brand4} alt='brand Logo' className="brands" data-aos="fade-down" data-aos-delay="750"/>
              <Image  src={Brand5} alt='brand Logo' className="brands" data-aos="fade-down" data-aos-delay="1000"/>
              <Image  src={Brand6} alt='brand Logo' className="brands" data-aos="fade-down" data-aos-delay="1250"/>
            </div>
          </div>

          <Footer  />
        </>
      )}

    </>
  );
}
