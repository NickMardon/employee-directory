import React from 'react';

const style = {
  margin: "0 10% 0 10%",
  };

function Search({ placeholder, handleChange }) {
    return (
        <div>
           <input style={style} 
               className = 'search'
               type='search'
               placeholder={ placeholder }
               onChange={ handleChange }
           />
        </div>
    )
}

export default Search;