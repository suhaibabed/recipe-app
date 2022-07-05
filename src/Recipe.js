import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div>
      <div className={style.recipe}>
        <h1>{title}</h1>
        <ol>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
        <p>{calories}</p>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Recipe;
