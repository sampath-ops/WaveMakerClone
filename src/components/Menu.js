import { useState } from "react";
import logo from "../Images/title.svg";
import "./menu.css";

const Menu = () => {

    const [isActive,setIsActive] = useState(false);
    const handleClick = (e)=>{
        setIsActive(current => !current);
    }
    const icons = ["twitter","facebook","insta","linkedin"];

    return ( 
        <div className="menu">
            {/* burger  */}
            <button className={`hamburger ${isActive ? "is-active":""}`} type="button" onClick={handleClick}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>     
            </button>
            
            {/* menu  */}
            <div className="full-screen-menu">
            {/* menu ball  */}
            <div className={`full-screen-menu__ball ${isActive ? "is-active":""}`}>
                
            </div>
            {/* links  */}
            <div className={`full-screen-menu__main ${isActive ? "is-active":""}`}>
                <div className="menu_links">
                    <ul>
                        <li>Story</li>
                        <li>Work</li>
                        <li>People</li>
                        <li>Platform watch</li>
                        <li>What's new</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <img src={logo} alt="" />
                <div className="social-icons">
                    {
                        icons.map((icon,index)=>{
                            const img  = require(`../Images/social/${icon}.svg`);
                            return(
                                <a href="/" key={index}><img src={img} alt="" /></a>
                            )
                        })
                    }
                </div>
                <div className="select-locations">
                    Weavemaker Global
                </div>
            </div>
            </div> 
          
        </div>
        
     );
}
 
export default Menu;