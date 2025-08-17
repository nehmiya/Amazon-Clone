import React from "react";
import classes from "./Category.module.css";

function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <a href={`#${data.name}`}>
        <h2>{data.title}</h2>
      </a>
      <img src={data.imgLink} alt={data.name} />
      <p>Shop Now</p>
    </div>
  );
}

export default CategoryCard;
