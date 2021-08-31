const SuggestedMealCard = ({ pickedMeal, description }) => {
    return (
        <div className='cardtwo'>

            <h3>{pickedMeal}</h3>
            {/* <img src={image} alt="" id="cardImage" /> */}
            <p>{description}</p>

        </div>
    );
};

export default SuggestedMealCard;