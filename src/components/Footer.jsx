import React from "react";
import '../style/footer.css'
function Footer() {
    return (
        <footer className="footer">
            <div className="reg">
            <img className="reg-back" src={process.env.PUBLIC_URL + '/images/suggestion-back.svg'}/>
                <div>
                    <p className="reg__title">Lorem ispum is simply dummy.</p>
                    <p className="reg__desc">Countrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                </div>
                <form className="email__form"> 
                        <input type="text" placeholder="Email Address"/>
                        <div>
                            <button type="button"> </button>
                        </div>
                </form>
            </div>
            <div className="wrap">
                <div className="footer__list">
                    <div className="footer__company__block">
                        <img src={process.env.PUBLIC_URL + '/images/second-logo.svg'} className="footer__company__logo"/>
                        <p className="footer__company__text">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                    <div className="link-block">
                        <p className="link-block-title">Customers</p>
                        <ul className='link-block-menu'>
                            <li className="link-block-menu-item">Buyer</li>
                            <li className="link-block-menu-item">Supplier</li>
                        </ul>
                    </div>
                    <div className="link-block">
                        <p className="link-block-title">Company</p>
                        <ul className='link-block-menu'>
                            <li className="link-block-menu-item">About Us</li>
                            <li className="link-block-menu-item">Careers</li>
                            <li className="link-block-menu-item">Contact Us</li>
                        </ul>
                    </div>
                    <div className="link-block">
                        <p className="link-block-title">Further Information</p>
                        <ul className='link-block-menu'>
                            <li className="link-block-menu-item">Terms&Conditions</li>
                            <li className="link-block-menu-item">Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <p className="link-block-title">Follow us</p>
                        <input type="text" className="footer__input" placeholder="Email Address"></input>
                        <div className="images__list">
                            <img className="images__list__item" src={process.env.PUBLIC_URL + '/images/facebook.svg'}/>
                            <img className="images__list__item" src={process.env.PUBLIC_URL + '/images/twitter.svg'}/>
                            <img className="images__list__item" src={process.env.PUBLIC_URL + '/images/insta.svg'}/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;