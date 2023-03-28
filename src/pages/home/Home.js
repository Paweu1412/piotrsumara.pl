import "./Home.scss";

import logoSignet from "./assets/signet.svg";

import phoneIcon from "./assets/contact/phone.svg";
import emailIcon from "./assets/contact/email.svg";
import messengerIcon from "./assets/contact/messenger.svg";

const ContactIcon = (iconNumber) => {
	const iconTypes = {
		1: phoneIcon,
		2: messengerIcon,
		3: emailIcon
	}

	return (
		<div className="container--navigation--social-icon">
			<img src={iconTypes[iconNumber]} alt="social icon" />
		</div>
	);
}

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
					<img src={logoSignet} alt="big logo" />

					<div className="container--general--background--text">
						<span>
							<h1>PIOTR{"\n"}SUMARA</h1>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}