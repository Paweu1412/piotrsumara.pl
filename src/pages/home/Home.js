import { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import FsLightbox from "fslightbox-react";

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

import firstImage from "./assets/portfolio/1.jpg";
import secondImage from "./assets/portfolio/2.jpg";
import thirdImage from "./assets/portfolio/3.jpg";
import fourthImage from "./assets/portfolio/4.jpg";
import fifthImage from "./assets/portfolio/5.jpg";
import sixthImage from "./assets/portfolio/6.jpg";
import seventhImage from "./assets/portfolio/7.png";
import eighthImage from "./assets/portfolio/8.pdf";
import ninthImage from "./assets/portfolio/9.pdf";
import tenthImage from "./assets/portfolio/10.pdf";
import eleventhImage from "./assets/portfolio/11.png";
import twelfthImage from "./assets/portfolio/12.png";
import thirteenthImage from "./assets/portfolio/13.png";
import fourteenthImage from "./assets/portfolio/14.png";
import fifteenthImage from "./assets/portfolio/15.png";
import sixteenthImage from "./assets/portfolio/16.jpg";
import seventeenthImage from "./assets/portfolio/17.jpg";
import eighteenthImage from "./assets/portfolio/18.jpg";
import nineteenthImage from "./assets/portfolio/19.jpg";
import twentiethImage from "./assets/portfolio/20.jpg";

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

      if (width > 1460) {
        newRectangles.push(Rectangle());
      }
      if (width > 1320) {
        newRectangles.push(Rectangle());
      }
      if (width > 1200) {
        newRectangles.push(Rectangle());
      }
      if (width > 1100) {
        newRectangles.push(Rectangle());
      }

      setRectangles(newRectangles);
    };

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
};

const RectanglesLeft = () => {
  const [rectangles, setRectangles] = useState([]);

  const Rectangle = () => {
    return <img src={rectangle} alt="rectangle" />;
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newRectangles = [];

      if (width > 130) {
        newRectangles.push(Rectangle());
      }
      if (width > 240) {
        newRectangles.push(Rectangle());
      }
      if (width > 360) {
        newRectangles.push(Rectangle());
      }
      if (width > 500) {
        newRectangles.push(Rectangle());
      }

      setRectangles(newRectangles);
    };

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
};

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
  const [lightboxController, setLightBoxController] = useState({
    toggler: false,
    sourceIndex: 0,
  });

  const openLightboxOnSource = (sourceIndex) => {
    setLightBoxController({
      toggler: !lightboxController.toggler,
      sourceIndex: sourceIndex,
    });
  };

  return (
    <div className="container">
      <Menu>
        <a id="home" href="#home">
          HOME
        </a>
        <a id="about" href="#aboutme">
          O MNIE
        </a>
        <a id="skills" href="#skills">
          UMIEJĘTNOŚCI
        </a>
        <a id="portfolio" href="#portfolio">
          PORTFOLIO
        </a>
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
          <div className="navigation">
            <div className="navigation--option first">
              <a href="#home">Home</a>
            </div>

            <div className="navigation--option">
              <a href="#aboutme">O MNIE</a>
            </div>

            <div className="navigation--option">
              <a href="#skills">UMIEJĘTNOŚCI</a>
            </div>

            <div className="navigation--option">
              <a href="#portfolio">PORTFOLIO</a>
            </div>
          </div>
        </div>

        <div className="main--first" id="home">
          <div className="grid">
            <div className="grid--item left">
              <img src={logoSignet} alt="signet" />
            </div>

            <div className="grid--item right">
              <h1>
                PIOTR<br></br>SUMARA
              </h1>
            </div>
          </div>
        </div>

        <div className="main--second" id="aboutme">
          <div className="content">
            <h2>O mnie</h2>

            <p>
              Cześć, mam na imię Piotr i jestem grafikiem komputerowym. Moją
              pasją jest tworzenie projektów graficznych. Ukończyłem kierunek
              grafiki komputerowej w technikum, a niedługo zacznę rozwijać swoje
              umiejętności na studiach.
            </p>
          </div>
        </div>

        <div className="main--third">
          <div className="content">
            <div className="content--left">
              <h2>Czym się zajmuję</h2>

              <p>
                Jestem specjalistą od projektowania grafiki 2D, a moje usługi
                obejmują tworzenie różnego rodzaju projektów - w tym ulotek,
                wizytówek, plakatów, książek oraz materiałów użytkowych dla
                firm. Dodatkowo zajmuję się projektowaniem UI/UX w programach
                Adobe XD oraz Figma.
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
              <img src={acrobat} alt="Adobe Acrobat" className="grid--icon" />
              <h3 className="grid--title">Adobe Acrobat</h3>
            </div>
            <div className="grid--item">
              <img
                src={photoshop}
                alt="Adobe Photoshop"
                className="grid--icon"
              />
              <h3 className="grid--title">Adobe Photoshop</h3>
            </div>
            <div className="grid--item">
              <img
                src={illustrator}
                alt="Adobe Illustrator"
                className="grid--icon"
              />
              <h3 className="grid--title">Adobe Illustrator</h3>
            </div>
            <div className="grid--item">
              <img
                src={premiere}
                alt="Adobe Premiere Pro"
                className="grid--icon"
              />
              <h3 className="grid--title">Adobe Premiere Pro</h3>
            </div>
            <div className="grid--item">
              <img src={indesign} alt="Adobe InDesign" className="grid--icon" />
              <h3 className="grid--title">Adobe InDesign</h3>
            </div>
            <div className="grid--item">
              <img src={figma} alt="Figma" className="grid--icon" />
              <h3 className="grid--title">Figma</h3>
            </div>
            <div className="grid--item">
              <img src={xd} alt="Adobe Xd" className="grid--icon" />
              <h3 className="grid--title">Adobe Xd</h3>
            </div>
            <div className="grid--item">
              <img
                src={lightroom}
                alt="Adobe Lightroom"
                className="grid--icon"
              />
              <h3 className="grid--title">Adobe Lightroom</h3>
            </div>
            <div className="grid--item">
              <img src={procreate} alt="Procreate" className="grid--icon" />
              <h3 className="grid--title">Procreate</h3>
            </div>
            <div className="grid--item">
              <img
                src={impozycjoner}
                alt="Impozycjoner"
                className="grid--icon"
              />
              <h3 className="grid--title">Impozycjoner</h3>
            </div>
          </div>

          <div className="main--fifth" id="whyui">
            <div className="content">
              <div className="content--left">
                <h2>DLACZEGO GRAFIKA?</h2>

                <p>
                  Zajmuję się grafiką, ponieważ uwielbiam tworzyć coś nowego i
                  oryginalnego. Jestem zafascynowany możliwościami, jakie daje
                  mi praca w tej dziedzinie. Zajmując się grafiką, ciągle się
                  uczę i rozwijam swoje umiejętności, co daje mi wiele
                  satysfakcji i pozwala na ciągłe wyzwania. grafika to dla mnie
                  nie tylko praca, ale przede wszystkim pasja, która daje mi
                  wiele radości i spełnienia.
                </p>
              </div>
              <div className="content--right">
                <img src={logoSignet} alt="logo" />
              </div>
              <div className="rectangles">
                <RectanglesLeft />
              </div>
            </div>
          </div>

          <div className="main--sixth" id="portfolio">
            <div className="content">
              <div className="content--header">
                <h2 className="header--text">PORTFOLIO</h2>
              </div>

              <div className="content--design">
                <h2 className="design--header">DESIGN</h2>
              </div>

              <div className="portfolio--upper">
                <div
                  className="first-photo"
                  onClick={() => openLightboxOnSource(0)}
                >
                  <img 
                    src={sixthImage} 
                    alt="firstImage" 
                  />
                </div>

                <div
                  className="second-photo"
                  onClick={() => openLightboxOnSource(1)}
                >
                  <img
                    src={secondImage}
                    alt="secondImage"
                  />
                </div>

                <div
                  className="third-photo"
                  onClick={() => openLightboxOnSource(2)}
                >
                  <img
                    src={eleventhImage}
                    alt="thirdImage"
                  />
                </div>
              </div>

              <div className="portfolio--upper">
                <div
                  className="fourth-photo"
                  onClick={() => openLightboxOnSource(3)}
                >
                  <img 
                    src={twelfthImage} 
                    alt="fourthImage" 
                  />
                </div>

                <div
                  className="fifth-photo"
                  onClick={() => openLightboxOnSource(4)}
                >
                  <img
                    src={thirteenthImage}
                    alt="fifthImage"
                  />
                </div>

                <div
                  className="seventh-photo"
                  onClick={() => openLightboxOnSource(5)}
                >
                  <img
                    src={fifteenthImage}
                    alt="seventhImage"
                  />
                </div>

                <div
                  className="sixth-photo"
                  onClick={() => openLightboxOnSource(6)}
                >
                  <img
                    src={fourteenthImage}
                    alt="sixthImage"
                  />
                </div>
              </div>

              <div className="content--design">
                <h2 className="design--header">PROJEKT UBRAŃ</h2>
              </div>

              <div className="portfolio--clothes">
                <div
                  className="seventh-photo"
                  onClick={() => openLightboxOnSource(7)}
                >
                  <img 
                    src={thirdImage} 
                    alt="seventhImage" 
                  />
                </div>

                <div
                  className="eighth-photo"
                  onClick={() => openLightboxOnSource(8)}
                >
                  <img 
                    src={firstImage} 
                    alt="eightImage" 
                  />
                </div>

                <div
                  className="nineth-photo"
                  onClick={() => openLightboxOnSource(9)}
                >
                  <img 
                    src={fifthImage} 
                    alt="ninethImage" 
                  />
                </div>

                <div
                  className="tenth-photo"
                  onClick={() => openLightboxOnSource(10)}
                >
                  <img 
                    src={fourthImage} 
                    alt="tenthImage" 
                  />
                </div>
              </div>

              <div className="content--design">
                <h2 className="design--header">UX/UI</h2>
              </div>

              <div className="portfolio--book">
                <div className="content">
                  <img 
                    src={fourteenthImage} 
                    alt="redirect image" 
                  />
                </div>
              </div>

              <div className="footer">
                <div className="footer--content">
                  <h2>KONTAKT</h2>
                  
                  <p>
                    TEL. +48 510 730 071<br></br>
                    E-MAIL: piotrsumaracontact@gmail.com<br></br>
                    32-700 Bochnia, Małopolskie
                  </p>
                </div>
              </div>

              <FsLightbox
                toggler={lightboxController.toggler}
                sourceIndex={lightboxController.sourceIndex}
                sources={[
                  sixthImage,
                  secondImage,
                  eleventhImage,
                  twelfthImage,
                  thirteenthImage,
                  fifteenthImage,
                  fourteenthImage,
                  thirdImage,
                  firstImage,
                  fifthImage,
                  fourthImage
                ]}
                onOpen={() => {
                  if (window.innerWidth < 850) {
                    document.getElementsByClassName("bm-burger-button")[0].style.display = 'none'}
                  }
                }
                
                onClose={() => {
                  if (window.innerWidth < 850) {
                    document.getElementsByClassName("bm-burger-button")[0].style.display = 'block'}
                  }
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
