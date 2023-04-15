import React from "react";
import {NavLink ,Link} from "react-router-dom"; 
import ContentHeader from "./ContentHeader";

function Header() {
    return (  
        <div className="header">
            <div className="header__decorative__block"></div>
            <div className="header__menu">
                    <ul className="menu">
                        <Link to="/main" className="menu__item__block__btn">
                            <img src={process.env.PUBLIC_URL + '/images/logo.svg'} className="menu__image" />
                        </Link>
                        <NavLink to="/" className="menu__item">
                            <p className="menu__link">Home</p>
                        </NavLink>
                        <NavLink to ="/Features" className="menu__item">
                            <p className="menu__link">Features</p>
                        </NavLink>
                        <NavLink to="/Testimonial"className="menu__item">
                            <p className="menu__link">Testimonial</p>
                        </NavLink>
                        <NavLink to ="/Pricing"className="menu__item">
                            <p className="menu__link">Pricing</p>
                        </NavLink>
                        <NavLink to ="/cta" className="menu__item">
                            <p className="menu__link">CTA</p>
                        </NavLink>
                            <button type="button" className="menu__button white-button">Try Demo</button>

                    </ul>
                    <ContentHeader/>
            </div>
        </div>
    );
}

export default Header;