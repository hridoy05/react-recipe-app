import React from 'react';

const Header = ({search,onInputChange,onSearchButton}) => {
    return (
        <div className="Container">
        <div className="jumbotron">
            <h1 className="display-1 text-center">
            <i className="material-icons brand-icon">fastfood</i>Food Recipe
            </h1>
            <div className="input-group w-50 mx-auto">
                <input 
                type="text" 
                className="form-control"
                 placeholder="search your recipe" 
                value = {search}   
                onChange = {onInputChange}
                 />
                <div className="input-group-append ">
                   <button className="btn btn-dark" onClick={onSearchButton}>Search Recipe</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;