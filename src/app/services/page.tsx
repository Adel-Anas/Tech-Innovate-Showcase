'use client'
import React from "react";
import CardContainer from "../_components/CardContainer";
import { useEffect } from "react";
import { CiMobile1 } from "react-icons/ci";
import { FaChromecast } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { IoLayersOutline } from "react-icons/io5";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  return (
    <>
      <Navbar />
      <section data-aos="fade-in" className="flex flex-col items-center justify-center gap-16 mb-10 h-screen pt-44">
        <div className="flex flex-col text-center gap-5">
          <p className="text-[#E01C34]" data-aos="fade-up">
            OUR POPULAR SERVICES
          </p>
          <p
            className="text-4xl font-bold"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            We Take care of your buisness
          </p>
          <p
            className="text-xl text-[#717173]"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            We provide comprehensive solutions to nurture <br /> and grow your
            business
          </p>
        </div>

        <div
          className="grid grid-cols-2 gap-8 bg-[#8db8ad1c] p-5 mb-20 rounded"
          data-aos="fade-in"
          data-aos-delay="750"
        >
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
      <Footer />
    </>
  );
}

export default Page;
