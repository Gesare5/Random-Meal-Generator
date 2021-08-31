import React, { useState } from "react";

const initialValues = {
    carbs: "",
    protein: ""
};

export default function Form() {
    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        e.preventDefault();
        setValues({
            ...values,
            [name]: value,
        });
        console.log()
    };

    return (
        <form>
            <input
                value={values.carbs}
                onChange={handleInputChange}
                name="carbs"
                label="Carbs"
            />
            <input
                value={values.protein}
                onChange={handleInputChange}
                name="protein"
                label="Protein"
            />
            {/* ... Rest of the input fields */}
            <button type="submit"> Submit </button>
        </form>
    );
}