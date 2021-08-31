import React, { useState } from 'react';
import { data } from '../../store/data';

const initialValues = { food: "", description: "" };
// const arrayFruit = [];

function AddNewMeal() {
    // const [food, setFood] = useState("");
    // const [description, setDescription] = useState("");
    const [values, setValues] = useState(initialValues);

    /* function handleChange(e) {
         setFood(e.target.value)
     }
wheres the url


     function handleDescription(e) {
         setDescription(e.target.value)
     }
     
     function handleInput(e) {
         e.preventDefault();
         item.food = food;
         item.description = description;
         console.log(item)
     }*/

    function handleChange(e) {
        // const name = e.target.name
        //const value = e.target.value 
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });

    }

    function handleInput(e) {
        e.preventDefault();
        console.log(values)
        data.push(values)
        console.log(data)

    }

    return (
        <div>
            <form className="main-form">

                <h3 className="sign-h3"> Can't find something you like? </h3>
                <h3 className="sign-h3"> Just add it</h3>
                <input type="text"
                    className="un-input"
                    id="input-form"
                    name="food"
                    placeholder="Food"
                    value={values.food}
                    onChange={handleChange}
                />
                <textarea name="nutritional_facts"
                    id="input-form"
                    className="pass-input"
                    cols="30"
                    rows="10"
                    placeholder="Nutritional information"
                    value={values.nutritional_facts}
                    onChange={handleChange}>

                </textarea>

                <button className="submit-input" onClick={handleInput}>Add</button>
            </form>

        </div>
    );

}

export default AddNewMeal;
