import React,{useState} from "react";
import {FiChevronDown} from 'react-icons/fi';
function FaqCard(props) {
    const [isOpen, setIsOpen] = useState(false); 
    return (
        <div className={"card"}>
            <div className="card__title__block" onClick={()=>  setIsOpen(!isOpen) }>
                <p className={isOpen ? 'card__title_active' :"card__title"}>{props.title}</p>
                <FiChevronDown className={isOpen ? "card__image_active card__image" : "card__image"} src={process.env.PUBLIC_URL + '/images/Vector.svg'}/>
            </div>
            {
                isOpen ? 
                <div className="card__desc__block">
                    <p className="card__desc">Lorem <span>ipsum dolor sit amet</span> consectetur adipiscing elit sed do eiusmod tempor.Lorem consectetur adipiscing elit sed do eiusmod tempor.</p>
                </div>
                : 
                <></>
            }

        </div>
    );
}

export default FaqCard;