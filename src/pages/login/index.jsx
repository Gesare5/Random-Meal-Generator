import React from 'react';
import './style.css';
// import { useState } from 'react';

// const initialValues = { food: "", description: "" };

function Login() {

    // const [food, setFood] = useState("");
    // const [description, setDescription] = useState("");
    // const [values, setValues] = useState(initialValues);

    /* function handleChange(e) {
         setFood(e.target.value)
     }

     function handleDescription(e) {
         setDescription(e.target.value)
     }

     function handleInput(e) {
         e.preventDefault();
         item.food = food;
         item.description = description;
         console.log(item)
     }*/

    // function handleChange(e) {
    //     // const name = e.target.name
    //     //const value = e.target.value 
    //     const { name, value } = e.target;

    //     setValues({
    //         ...values,
    //         [name]: value,
    //     });

    // }

    // function handleInput(e) {
    //     e.preventDefault();
    //     console.log(values)
    //     data.push(values)
    //     console.log(data)

    // }

    return (
        <div>
            <div className="main">
                <p className="sign" align="center">Login</p>
                <form className="form1" id="login">

                    <input type="text"
                        // id="input-form"
                        name="Uname"
                        className="un"
                        placeholder="Username"
                    // value={values.food}
                    // onChange={handleChange}
                    />

                    <br></br>
                    <input type="Password"
                        name="Pass"
                        className="pass"
                        // id="input-form"
                        placeholder="Password"
                    // value={values.nutritional_facts}
                    // onChange={handleChange}>

                    />

                    <br></br>
                    <button id="log"
                        name="log"
                        className="submit"
                    // onClick={handleInput}
                    >Submit</button>

                    <br></br>
                </form>

            </div>
        </div>
    );
}

export default Login;
