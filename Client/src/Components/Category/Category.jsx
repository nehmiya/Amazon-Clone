import React from "react";
import CategoryCard from "./CategoryCard";
import { categoryFullInfo } from "./categoryFullInfo";
import classes from "./Category.module.css";

function Category() {
  return (
    <section className={classes.category__container}>
      {categoryFullInfo.map((infos) => (
        <CategoryCard key={infos.name} data={infos} />
      ))}
    </section>
  );
}

export default Category;
