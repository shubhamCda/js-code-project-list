import recipes from "./recipes(1).json" with {type: 'json'}

/**
 * 
 * Group all recipes by their difficulty level (Easy, Medium, etc.). Return an object where each key is a difficulty level, and the value is an array of recipe names.
// Expected Output Example:
{
  Easy: ["Classic Margherita Pizza", "Chocolate Chip Cookies", ...],
  Medium: ["Vegetarian Stir-Fry", "Chicken Alfredo Pasta", ...]
}
 */

const difficultyLevel = () => {
  for (const recipe in recipes) {
    // console.log(recipes[recipe]);
    return recipes[recipe].reduce((acc, { name, difficulty }) => {
      if (!acc[difficulty]) {
        acc[difficulty] = [];

      }
      acc[difficulty].push(name);
      return acc;
    },{})
    
  }
}

console.log(difficultyLevel());

