import React from 'react';

const RecipeList = ({ recipes, onSelect }) => {
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe,index )=> (
          <li key={index} onClick={() => onSelect(recipe.id)}>
            {recipe.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
