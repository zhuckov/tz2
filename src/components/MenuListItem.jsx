import React from "react";
function MenuListItem(props) {
    return (
        <div className="menu__list__item">
            <div className="menu__list__image__wrapp">
                    <img src={process.env.PUBLIC_URL + 'images/second-menu-images/rhomb.svg'} alt="" />
                    <img className="menu__list__item__image" src={process.env.PUBLIC_URL + props.item.path} alt=""/>
            </div>

            <div className="menu__list__text__wrapp">
                    <h3 className="menu__list__item__title">{props.item.title}</h3>
                    <p className="menu__list__item__desc">{props.item.description}</p>        
            </div>
        </div>
    );
}

export default MenuListItem;