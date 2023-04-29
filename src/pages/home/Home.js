import { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";

import "./Home.scss";

import logoSignet from "./assets/signet.svg";
// import plLang from "./assets/pl_lang.svg";

import phoneIcon from "./assets/contact/phone.svg";
import emailIcon from "./assets/contact/email.svg";
import messengerIcon from "./assets/contact/messenger.svg";

import rectangle from "./assets/rectangle.svg";

import acrobat from "./assets/apps/acrobat.svg";
import figma from "./assets/apps/figma.svg";
import illustrator from "./assets/apps/illustrator.svg";
import impozycjoner from "./assets/apps/impozycjoner.svg";
import indesign from "./assets/apps/indesign.svg";
import photoshop from "./assets/apps/photoshop.svg";
import lightroom from "./assets/apps/lightroom.svg";
import premiere from "./assets/apps/premiere.svg";
import procreate from "./assets/apps/procreate.svg";
import xd from "./assets/apps/xd.svg";


// import "animate.css/animate.min.css";

// import { AnimationOnScroll } from 'react-animation-on-scroll';

const Rectangles = () => {
  const [rectangles, setRectangles] = useState([]);

  const Rectangle = () => {
    return <img src={rectangle} alt="rectangle" />;
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newRectangles = [];

      if (width > 1460) { newRectangles.push(Rectangle()) };
      if (width > 1320) { newRectangles.push(Rectangle()) };
      if (width > 1200) { newRectangles.push(Rectangle()) };
      if (width > 1100) { newRectangles.push(Rectangle()) };

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

const ContactIcon = (props) => {
  const { iconNumber } = props;

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
      <Menu>
        <a id="home" href="/">HOME</a>
        <a id="about" href="/about">O MNIE</a>
        <a id="skills" href="/contact">UMIEJĘTNOŚCI</a>
        <a id="portfolio" href="/contact">PORTFOLIO</a>
      </Menu>

      <div className="sidebar">
        <div className="sidebar--logo">
          <img src={logoSignet} alt="logo" />
        </div>

        <div className="sidebar--social">
          <div className="sidebar--social-icons">
            <ContactIcon iconNumber={1} />
            <ContactIcon iconNumber={2} />
            <ContactIcon iconNumber={3} />
          </div>
        </div>
      </div>

      <div className="main">
        <div className="main--header">
          <div className="navigation" id="home">
            <div className="navigation--option first">
              <a href="#home">Home</a>
            </div>

            <div className="navigation--option">
              <a href="/">O MNIE</a>
            </div>

            <div className="navigation--option">
              <a href="/">UMIEJĘTNOŚCI</a>
            </div>

            <div className="navigation--option">
              <a href="/">PORTFOLIO</a>                
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

        <div className="main--second">
          <div className="content">
            <h2>O mnie</h2>

            <p>
              Cześć, mam na imię Piotr i jestem grafikiem komputerowym. Moją pasją jest tworzenie projektów graficznych. Ukończyłem kierunek grafiki komputerowej w technikum, a niedługo zacznę rozwijać swoje umiejętności na studiach.
            </p>
          </div>
        </div>

        <div className="main--third">
          <div className="content">
            <div className="content--left">
              <h2>Czym się zajmuję</h2>

              <p>
                Jestem specjalistą od projektowania grafiki 2D, a moje usługi obejmują tworzenie różnego rodzaju projektów - w tym ulotek, wizytówek, plakatów, książek oraz materiałów użytkowych dla firm. Dodatkowo zajmuję się projektowaniem UI/UX w programach Adobe XD oraz Figma.
              </p>
            </div>
            
            <div className="content--right">
              <Rectangles />
            </div>
          </div>
        </div>

        <div className="main--fourth">
          <div className="header">
            <h2 className="header--item upper">WYKONUJĘ PROJEKTY</h2>
            <h2 className="header--item lower">W PROGRAMACH TAKICH JAK</h2>
          </div>

          <div className="grid">
            <div className="grid--item">
              <img src={acrobat} alt="Adobe Acrobat" className="grid--icon"/>
              <h3 className="grid--title">Adobe Acrobat</h3>
            </div>
            <div className="grid--item">
              <img src={photoshop} alt="Adobe Photoshop" className="grid--icon"/>
              <h3 className="grid--title">Adobe Photoshop</h3>
            </div>
            <div className="grid--item">
              <img src={illustrator} alt="Adobe Illustrator" className="grid--icon"/>
              <h3 className="grid--title">Adobe Illustrator</h3>
            </div>
            <div className="grid--item">
              <img src={premiere} alt="Adobe Premiere Pro" className="grid--icon"/>
              <h3 className="grid--title">Adobe Premiere Pro</h3>
            </div>
            <div className="grid--item">
              <img src={indesign} alt="Adobe InDesign" className="grid--icon"/>
              <h3 className="grid--title">Adobe InDesign</h3>
            </div>
            <div className="grid--item">
              <img src={figma} alt="Figma" className="grid--icon"/>
              <h3 className="grid--title">Figma</h3>
            </div>
            <div className="grid--item">
              <img src={xd} alt="Adobe Xd" className="grid--icon"/>
              <h3 className="grid--title">Adobe Xd</h3>
            </div>
            <div className="grid--item">
              <img src={lightroom} alt="Adobe Lightroom" className="grid--icon"/>
              <h3 className="grid--title">Adobe Lightroom</h3>
            </div>
            <div className="grid--item">
              <img src={procreate} alt="Procreate" className="grid--icon"/>
              <h3 className="grid--title">Procreate</h3>
            </div>
            <div className="grid--item">
              <img src={impozycjoner} alt="Impozycjoner" className="grid--icon"/>
              <h3 className="grid--title">Impozycjoner</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
