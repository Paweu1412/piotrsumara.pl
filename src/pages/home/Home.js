import "./Home.scss";

import logoSignet from "./assets/signet.svg";
import plLang from "./assets/pl_lang.svg";

import phoneIcon from "./assets/contact/phone.svg";
import emailIcon from "./assets/contact/email.svg";
import messengerIcon from "./assets/contact/messenger.svg";

const ContactIcon = (iconNumber) => {
  const iconTypes = {
    1: phoneIcon,
    2: messengerIcon,
    3: emailIcon,
  };

  return (
    <div className="container--navigation--social-icon">
      <img src={iconTypes[iconNumber]} alt="social icon" />
    </div>
  );
};

export const Home = () => {
  return (
    <div className="container">
      <div className="container--navigation">
        <div className="container--navigation--logo">
          <img src={logoSignet} alt="small logo" />
        </div>

        <div className="container--navigation--contact-icons">
          {ContactIcon(1) /* phone icon */}
          {ContactIcon(2) /* messenger icon */}
          {ContactIcon(3) /* email icon */}
        </div>
      </div>

      <div className="container--general">
        <div className="container--general--background">
          <div className="container--general--background--navbar">
            <div className="container--general--background--navbar--items">
              <div className="container--general--background--navbar--items--item active">
                <span>HOME</span>
              </div>

              <div className="container--general--background--navbar--items--item">
                <span>O MNIE</span>
              </div>

              <div className="container--general--background--navbar--items--item">
                <span>UMIEJĘTNOŚCI</span>
              </div>

              <div className="container--general--background--navbar--items--item">
                <span>PORTFOLIO</span>
              </div>

              <div className="container--general--background--navbar--items--item">
                <img src={plLang} alt="language" />
                <span className="language">PL</span>
              </div>
            </div>
          </div>

          <div className="container--general--background--text">
            <div className="container--general--background--text--name">
              <h1>PIOTR<br></br>SUMARA</h1>

							<h2>GRAFIK KOMPUTEROWY</h2>
            </div>

            <div className="container--general--background--text--logo">
              <img src={logoSignet} alt="big logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
