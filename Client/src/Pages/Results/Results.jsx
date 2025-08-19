import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import classes from "./Results.module.css";

function Results() {
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const { categoryName } = useParams();

  useEffect(() => {
    if (categoryName === "womens-clothing") {
      setCategoryId("women's clothing");
    } else if (categoryName === "mens-clothing") {
      setCategoryId("men's clothing");
    } else {
      setCategoryId(categoryName);
    }
  }, [categoryName]);

  useEffect(() => {
    if (!categoryId) return;

    axios
      .get(`https://fakestoreapi.com/products/category/${categoryId}`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log("Err: ", err);
      });
  }, [categoryId]);

  return (
    <div className={classes.page}>
      <h1 className={classes.title}>Results</h1>
      <p className={classes.breadcrumb}>Category / {categoryId} /</p>
      <hr className={classes.divider} />
      <div className={classes.products__container}>
        {category?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Results;
