import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Person1 from "@/images/Person1.webp";
import Person2 from "@/images/Person2.jpg";
import Person3 from "@/images/Person3.jpg";
import Person4 from "@/images/Person4.jpg";
import Person5 from "@/images/Person5.jpg";
import Person6 from "@/images/Person6.jpg";
import Image, { StaticImageData } from "next/image";

interface Person {
  name: string;
  position: string;
  image: StaticImageData;
}

function TeamSection() {
  const personInfo: Person[] = [
    {
      name: "Jhon Doe",
      position: "Jr. Web Developer",
      image: Person1,
    },
    {
      name: "Jane Smith",
      position: "Sr. Web Developer",
      image: Person2,
    },
    {
      name: "Alex Johnson",
      position: "Frontend Developer",
      image: Person3,
    },
    {
      name: "Emily Brown",
      position: "UI/UX Designer",
      image: Person4,
    },
    {
      name: "Sarah Wilson",
      position: "Backend Developer",
      image: Person5,
    },
    {
      name: "Micheal Davis",
      position: "Fullstack Developer",
      image: Person6,
    },
  ];

  return (
    <>
    <Navbar  />
      <section className="flex flex-col items-center justify-center mb-32 pt-32">
        <div className="text-center flex flex-col gap-5">
          <h1 className="text-lg text-bold text-[#E01C34]">Skilled Team</h1>
          <h2 className="text-3xl font-bold">
            Empowering your vision with a skilled team dedicated to excellence.
          </h2>
          <h3 className="text-lg text-[#717173] italic mb-8">
            With a commitment to excellence, our skilled team collaborates
            seamlessly <br /> to bring your vision to life, delivering
            exceptional results every time.
          </h3>
        </div>

        <div className="wrapper">
          {personInfo.map((person, index) => (
            <div key={index} className="card rounded-lg overflow-hidden">
              <Image src={person.image} alt="" className="Image"/>
              <div className="info">
                <h1>{person.name}</h1>
                <p>{person.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer  />
    </>
  );
}

export default TeamSection;
