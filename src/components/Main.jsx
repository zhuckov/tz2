import React from "react";
import FaqList from "./FaqList";
import MenuList from "./MenuList";
import Suggestions from "./Suggestions";
function Main() {
    return (  
        <main className="main">


            <div className="name__brands">
                <img className="name__brands__item" src={process.env.PUBLIC_URL + '/images/fedex-small.svg'}/>
                <img className="name__brands__item" src={process.env.PUBLIC_URL + '/images/amazon.svg'}/>
                <img className="name__brands__item" src={process.env.PUBLIC_URL + '/images/fedex-big.svg'}/>
                <img className="name__brands__item" src={process.env.PUBLIC_URL + '/images/google.svg'}/>
                <img className="name__brands__item" src={process.env.PUBLIC_URL + '/images/microsoft.svg'}/>
            </div>


            <div className="advantages__block"> 
                <div className="advantages__block__with__image">
                    <img src={process.env.PUBLIC_URL + '/images/advantages.svg'}/>
                </div>
                <div className="advantages__block__with__text">
                <p className="header__content__title">Lorem ipsum dolor</p>
                <h1 className="main__title"><span>Two</span> Saas are better <span>Than one.</span></h1>
                <p className="main__desc">One of the most fundamental ways to go about that is to create a memorable <span>E-Commerce</span> slogan.</p>
                    <div className="main__menu">
                        <div className="menu__item">
                            <img className="main__menu__image" src={process.env.PUBLIC_URL + '/images/load-image.svg'}/>
                            <p className="main__menu__li">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <div className="menu__item">
                            <img className="main__menu__image" src={process.env.PUBLIC_URL + '/images/finger-click-image.svg'}/>
                            <p className="main__menu__li">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <div className="menu__item">
                            <img className="main__menu__image" src={process.env.PUBLIC_URL + '/images/load-image.svg'}/>   
                            <p className="main__menu__li">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="main__faq__block">
                <div className="main__faq">
                    <p className="header__content__title">Lorem ipsum dolor</p>
                    <h1 className="main__faq__title"><span>With a name like Saas, it has to</span> be good.</h1>
                    <FaqList />
                    <div className="main__faq__button__panel">
                        <button className="main__faq__button__blue faq__btn">Free Trial</button>
                        <button className="main__faq__button__white faq__btn">Read More</button>
                    </div>
                </div>
                <div className="main__faq__block-with-img">
                    <img src={process.env.PUBLIC_URL + "/images/faq-image2.svg"}/>
                </div>
            </div>
            <MenuList />
            <Suggestions/>
        </main>
    );
}
export default Main;