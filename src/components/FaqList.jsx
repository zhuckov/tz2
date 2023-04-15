import React from "react";
import FaqCard from "./FaqCard";

function FaqList() {
    const titles = [ 'Review the facts Saas is the best?', 'Lorem ipsum dolor sit amet consectetur?', 'Lorem ipsum dolor sit amet consectetur?' ,'Lorem ipsum dolor sit amet consectetur?' ,'Lorem ipsum dolor sit amet consectetur?' ,'Lorem ipsum dolor sit amet consectetur?'

    ]
    return (
        <div className="faq-list">
            {
                titles.map(title => 
                    <FaqCard title={title}/>
                )
            }
        </div>
    );
}

export default FaqList;