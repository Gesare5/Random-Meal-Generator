import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../store/data';
import MealCard from '../../components/card';

import './example.css';
// import './style.css';


function MainPage() {
    return (
        <div>

            <div id="divert-to-suggest-meal" className="divert-to-suggest-meal">
                <Link to="/add-meal"> Don't see something you like? </Link>
            </div>
            <h1> Assorted Food Ideas </h1>
            <div>

                {data.map(({ food, image, nutritional_facts }) => (
                    <MealCard food={food} image={image} nutrition={nutritional_facts} />
                ))}

            </div>
        </div>
    )
}

export default MainPage;