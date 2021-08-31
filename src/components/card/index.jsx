import React from 'react';

function MealCard({ food, image, nutrition }) {
    return (
        <div className="Card">
            <div className="content">
                <h3>{food}</h3>
                <img src={image} alt="" id="cardImage" />
                <p>{nutrition}</p>
            </div>
        </div>
    );
}

export default MealCard;