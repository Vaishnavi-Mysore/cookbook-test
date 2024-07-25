import React from 'react';

const RecipeDetails = ({ recipe }) => {
  if (!recipe) return <div>Select a recipe to see details</div>;

  return (
    <div>
        <div style={{display:'flex'}}>
   
      <img style={{width:'4rem', marginRight:'1rem'}} alt={recipe.title} src={recipe.image} />
      
      <h2>{recipe.title}</h2>
</div>
      <h3>by {recipe.author}</h3>
      <h4>Ingredients</h4>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h4>Instructions</h4>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
