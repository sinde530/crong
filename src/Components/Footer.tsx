import React from "react";
import "../Styles/footer.css";
import { FaGithub, FaFacebookF, FaTwitterSquare, FaInstagram } from "react-icons/fa";

function Footer() {
	return (
		<div className="footer">
			<span className="icons">
				<a href="https://github.com/">
					<i className="fa-github">
						<FaGithub />
					</i>
				</a>
				<a href="https://twitter.com/?lang=ko">
					<i className="fa-twitter">
						<FaTwitterSquare />
					</i>
				</a>
				<a href="https://www.instagram.com/">
					<i className="fa-instagram">
						<FaInstagram />
					</i>
				</a>
				<a href="https://www.facebook.com/">
					<i className="fa-facebook">
						<FaFacebookF />
					</i>
				</a>
			</span>
		</div>
	);
}

export default Footer;
