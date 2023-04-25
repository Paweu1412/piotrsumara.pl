import { useState, useEffect } from "react";

import "./Home.scss";

import logoSignet from "./assets/signet.svg";
import plLang from "./assets/pl_lang.svg";

import phoneIcon from "./assets/contact/phone.svg";
import emailIcon from "./assets/contact/email.svg";
import messengerIcon from "./assets/contact/messenger.svg";

import rectangle from "./assets/rectangle.svg";

import "animate.css/animate.min.css";

import { AnimationOnScroll } from 'react-animation-on-scroll';

function Rectangles() {
  const [rectangles, setRectangles] = useState([]);

  const Rectangle = () => {
    return <img src={rectangle} alt="rectangle" />;
  };

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const newRectangles = [];

      if (width > 1460) newRectangles.push(Rectangle());
      if (width > 1320) newRectangles.push(Rectangle());
      if (width > 1200) newRectangles.push(Rectangle());
      if (width > 1050) newRectangles.push(Rectangle());

      setRectangles(newRectangles);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="rectangles">
      {rectangles.map((rectangle, index) => (
        <div key={index} className="rectangle">
          {rectangle}
        </div>
      ))}
    </div>
  );
}

const ContactIcon = (iconNumber) => {
  const iconTypes = {
    1: phoneIcon,
    2: messengerIcon,
    3: emailIcon,
  };

  return (
    <div className="sidebar--social-icon">
      <img src={iconTypes[iconNumber]} alt="social icon" />
    </div>
  );
};

export const Home = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar--logo">
          <img src={logoSignet} alt="logo" />
        </div>

        <div className="sidebar--social">
          <div className="sidebar--social-icons">
            {ContactIcon(1)}
            {ContactIcon(2)}
            {ContactIcon(3)}
          </div>
        </div>
      </div>

      <div className="main">
        <div className="main--header">
          <div className="navigation">
            <div className="navigation--option">
              <a href="#">Home</a>
            </div>

            <div className="navigation--option">
              <a href="#">O MNIE</a>
            </div>

            <div className="navigation--option">
              <a href="#">UMIEJĘTNOŚCI</a>
            </div>

            <div className="navigation--option">
              <a href="#">PORTFOLIO</a>                
            </div>
          </div>
        </div>

        <div className="main--first">
          <div className="grid">
            <div className="grid--item left">
              <img src={logoSignet} alt="signet" />
            </div>

            <div className="grid--item right">
              <h1>PIOTR<br></br>SUMARA</h1>
            </div>
          </div>
        </div>

        <AnimationOnScroll animateIn="animate__fadeInUp">
          <div className="main--second">
            <div className="content">
              <h2>O MNIE</h2>

              <p>
                Cześć, mam na imię Piotr i jestem grafikiem komputerowym. Moją pasją jest tworzenie projektów graficznych. Ukończyłem kierunek grafiki komputerowej w technikum, a niedługo zacznę rozwijać swoje umiejętności na studiach.
              </p>
            </div>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInUp">
          <div className="main--third">
            <div className="content">
              <div className="content--left">
                <h2>O MNIE</h2>

                <p>
                  Cześć, mam na imię Piotr i jestem grafikiem komputerowym. Moją pasją jest tworzenie projektów graficznych. Ukończyłem kierunek grafiki komputerowej w technikum, a niedługo zacznę rozwijać swoje umiejętności na studiach.
                </p>
              </div>
              
              <div className="content--right">
                {Rectangles()}
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};
