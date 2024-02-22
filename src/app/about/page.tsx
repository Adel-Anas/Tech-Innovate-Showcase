"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Digital from "@/images/digitalPicture.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import CountUp from "react-countup";

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
      <section data-aos="fade-in" className="flex items-center justify-center gap-11 mb-10 h-screen overflow-hidden">
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
            Empowering Brands with Innovative Digital Solutions and Strategic
            Insights.
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
      <Footer />
    </>
  );
}

export default Page;
