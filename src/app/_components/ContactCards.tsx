import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IconType } from "react-icons";

type Props = { Icon: IconType; title: string; descriptions: string, secondDescription : string};

const ContactCards = ({ Icon, descriptions, title, secondDescription}: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <div className="Contact-Cards">
      <div>
        <Icon className="react-icon h-12 w-12 text-[#E01C34]" />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg">{descriptions}</p>
        <p className="text-lg">{secondDescription}</p>
      </div>
    </div>
  );
};

export default ContactCards;
