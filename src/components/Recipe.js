import React,{useState} from 'react';
import IngredientsDetails from './IngredientsDetails';

const Recipe = ({recipe}) => {
    const { label, image, url, ingredients } = recipe.recipe;
    const [show,setShow] = useState(false)
    return (
        <div className="col-md-3">
        <div className="card">
        
        <img src={image} className="card-img-top w-50 mx-auto rounded-circle" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{label}</h5>
           
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-dark mb-2 text-center ">Details</a>
            <br/>
            <button onClick={()=>setShow(!show)} className="btn btn-dark text-center">ingredients</button>
            {
                show&& <IngredientsDetails ingredients={ingredients} />
            }
        </div>
     </div>

        </div>
    );
};

export default Recipe;