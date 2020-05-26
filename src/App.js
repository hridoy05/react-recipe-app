import React, { useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Recipe from './components/Recipe';
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  
  const [search,setSearch] = useState("chiken");
  const [recipes,setRecipes] = useState([])

  const APP_ID = "f5a90e55";
  const APP_KEY = "f933b0a091a38851202880fe26aee6c1";

  useEffect(() => {
    loadRecipe();

}, [])

const loadRecipe = async () => {
const result = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
 console.log(result.data.hits)
 
  setRecipes(result.data.hits)
}


  
  const onInputChange = (e) =>{
    setSearch(e.target.value)

  }
  const onSearchButton = () =>{
    loadRecipe()
  }
 
  return (
    <div className="Container">
     
      <Header search = {search} onInputChange = {onInputChange} onSearchButton={onSearchButton}/>
     <div className = "row">
     {
       recipes !== [] &&
       recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe}></Recipe>)
     }
     </div>
    </div>
  );
};

export default App;