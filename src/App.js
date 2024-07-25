

import React, { useState } from 'react';
import { recipes } from './recipeData';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetails';
import CommentSection from './components/CommentSection';

const App = () => {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleRecipeSelect = (id) => {
    setSelectedRecipeId(id);
  };

  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <RecipeList recipes={recipes} onSelect={handleRecipeSelect} />
      </div>
      <div style={{ flex: 2 }}>
        <RecipeDetail recipe={selectedRecipe} />
        {selectedRecipe && <CommentSection comments={selectedRecipe.comments} />}
      </div>
    </div>
  );
};

export default App;

