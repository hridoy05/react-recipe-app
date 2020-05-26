import React from 'react';
import { v4 as uuidv4 } from "uuid";


const IngredientsDetails = ({ingredients}) => {
    return ingredients.map(ingredient => {
        return (
            <ul key={uuidv4()} class="list-group">
                <li class="list-group-item ">{ingredient.text}</li>
                <li class="list-group-item">Weight - {ingredient.weight}</li>
            </ul>
        )
    })
};

export default IngredientsDetails;