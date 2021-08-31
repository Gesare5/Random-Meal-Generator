import React, { useState } from 'react';
import { data } from '../../store/data';
// import MealCard from '../../components/card';

import SuggestedMealCard from '../../components/suggested-meal';
import './style.css';


function SuggestMeal() {

    const [currentSuggestedMeal, setCurrentSuggestedMeal] = useState({});

    function suggestRandom() {
        var meal = data[Math.floor(Math.random() * data.length)];
        setCurrentSuggestedMeal(meal);
        console.log(meal)

    }

    return (
        <>

            <div className="mains">

                <div className="signs">
                    <SuggestedMealCard pickedMeal={currentSuggestedMeal.food} description={currentSuggestedMeal.nutritional_facts} />
                </div>
                <div>
                    <button className="submits" type="submit" onClick={suggestRandom}>Suggest Food</button>
                </div>
            </div>


        </>
    );
}

export default SuggestMeal;
