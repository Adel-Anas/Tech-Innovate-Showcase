import { IconType } from "react-icons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = { Icon: IconType; title: string; descriptions: string};

const CardContainer = ({ Icon, descriptions, title}: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <div className="cards-container">
      <div>
        <Icon className="react-icon h-12 w-12 text-[#E01C34]" />
      </div>
      <div className="flex flex-col gap-7">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg">{descriptions}</p>
      </div>
    </div>
  );
};

export default CardContainer;
