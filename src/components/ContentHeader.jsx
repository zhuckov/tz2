import React from "react";
function ContentHeader() {

    return (<div className="header__content"> 
            <div className="header__text__content">
                <p className="header__content__title">Lorem ipsum dolor</p>
                <h1 className="header__content__title__h1">Always the <span className="header__text__content__span span_with_underline_double_color">Real</span> thing, always <span className="header__text__content__span">Saas</span></h1>
                <p className="header__content__text__gray gray__text__middle">And that number is growing every day. That means <span>E-Commerce</span> is thriving.</p>
                <div className="header__content-buy-block">
                    <button className="white-button">Try For Free</button>
                    <button className="dark-blue-button">Try For Free</button>
                </div>
                <div className="header__content__payinfo__block">
                    <p className="header__content__text__gray">There are some things money can’t buy. For everything else there’s ‘’<span className="header__content__text__gray__card">MasterCard</span>” is a good example. </p>
                    <img className="image__corner" src={process.env.PUBLIC_URL + '/images/corner.svg'}/>
                </div>
            </div>
            <div className="header__content__image__block">
                <img src={process.env.PUBLIC_URL + '/images/comp.svg'}/>
            </div>
        </div>  
    );
}

export default ContentHeader;