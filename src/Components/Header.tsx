import React, { useState } from "react";
import "../Styles/header.css";
import "../App.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

function Header() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);
	return (
		<div className="header-box">
			<div>
				<div className="navbar-box">
					<Link to="#" className="menu-bars">
						<FaIcons.FaBars onClick={showSidebar} />
					</Link>
					<Link to="/crong-blog" className="header-nm">
						<h1 className="header-h1">Blog Class Naming</h1>
					</Link>
				</div>

				<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
					<ul className="nav-menu-items" onClick={showSidebar}>
						<li className="navbar-toggle">
							<Link to="#" className="menu-bars">
								<AiIcons.AiOutlineClose />
							</Link>
						</li>
						{SidebarData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link to={item.path}>
										{item.icon}
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</div>
	);
}

//     <div className="header">

//         <div className="header-box">
//             <h1>Blog Class Naming</h1>
//             <ul className="header-list">
//                 <li className="header-item" id="hd-item">My Home</li>
//                 <li className="header-item">Content</li>
//             </ul>
//         </div>
//     </div>
// );

export default Header;
