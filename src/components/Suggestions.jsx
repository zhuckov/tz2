function Suggestions() {
    return (
        <div className="suggestions">
            <div>
                <h1 className="suggestions__title">Keep calm and buy</h1>
                <p className="suggestions__p">With lowering the price to even a slight extent one can achieve exponential growth.</p>
            </div>
            <div className="suggestion__card__list">
                <div className="suggestion__card_white suggestion__card">
                    <h3 className="suggestion__card__title">STUDENT</h3>
                    <p className="suggestion__card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    <p className="suggestion__card__price">$15</p>
                    <div className="switch">
                        <div className="switch__item switch__item_active">Monthiy</div>
                        <div className="switch__item">Annually</div>
                    </div>
                    <div className="suggestion__card__block">
                        <div className="suggestion__card__item">
                            <img src={process.env.PUBLIC_URL + '/images/white-arrow.svg'} alt=""/>
                            <p className="suggestion__card__p">Consulting with experts 20 times for I yea</p></div>
                        <div className="suggestion__card__item">
                            <img src={process.env.PUBLIC_URL + '/images/white-arrow.svg'} alt=""/>
                            <p className="suggestion__card__p">Add friends for free for 1month</p></div>
                        <div className="suggestion__card__item">
                            <img src={process.env.PUBLIC_URL + '/images/white-arrow.svg'} alt=""/>
                            <p className="suggestion__card__p">Free 5 fonts</p></div>
                    </div>
                    <button className="suggestion__card__button">Buy Now</button>
                </div>
                <div className="suggestion__card_blue suggestion__card">
                    <h3 className="suggestion__card__title suggestion__card__title_pro">PRO</h3>
                    <p className="suggestion__card__desc suggestion__card__desc_pro">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    <p className="suggestion__card__price suggestion__card__price_pro">$30</p>
                    <div className="switch_pro switch">
                        <div className="switch__item switch__item_pro switch__item_pro_active">Monthiy</div>
                        <div className="switch__item switch__item_pro">Annually</div>
                    </div>
                    <div className="suggestion__card__block suggestion__card__block_pro">
                        <div className="suggestion__card__item">
                            <img src={process.env.PUBLIC_URL + '/images/white-arrow-pro.svg'} alt=""/>
                            <p className="suggestion__card__p__pro suggestion__card__p">Consulting with experts 20 times for I yea</p></div>
                        <div className="suggestion__card__item">
                            <img src={process.env.PUBLIC_URL + '/images/white-arrow-pro.svg'} alt=""/>
                            <p className="suggestion__card__p__pro suggestion__card__p">Add friends for free for 1month</p></div>
                        <div className="suggestion__card__item">
                            <img src={process.env.PUBLIC_URL + '/images/white-arrow-pro.svg'} alt=""/>
                            <p className="suggestion__card__p__pro suggestion__card__p">Free 5 fonts</p></div>
                    </div>
                    <button className="suggestion__card__button suggestion__card__button_pro">Buy Now</button>
                </div>
                <div className="suggestion__card_white suggestion__card">
                    <h3 className="suggestion__card__title">COMPANY</h3>
                    <p className="suggestion__card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    <p className="suggestion__card__price">$70</p>
                    <div className="switch"> 
                        <div className="switch__item switch__item_active">Monthiy</div>
                        <div className="switch__item">Annually</div>
                    </div>
                    <div className="suggestion__card__block">
                        <div className="suggestion__card__item">
                            <img src={process.env.PUBLIC_URL + '/images/white-arrow.svg'} alt=""/>
                            <p className="suggestion__card__p">Consulting with experts 20 times for I yea</p></div>
                        <div className="suggestion__card__item">
                            <img src={process.env.PUBLIC_URL + '/images/white-arrow.svg'} alt=""/>
                            <p className="suggestion__card__p">Add friends for free for 1month</p></div>
                        <div className="suggestion__card__item">
                            <img src={process.env.PUBLIC_URL + '/images/white-arrow.svg'} alt=""/>
                            <p className="suggestion__card__p">Free 5 fonts</p></div>
                    </div>
                    <button className="suggestion__card__button">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default Suggestions;