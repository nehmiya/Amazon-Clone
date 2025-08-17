import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ProductCard from './ProductCard.jsx';
import classes from './Product.module.css'

function Product() {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((response)=>{
            setProducts(response.data)
        }).catch((err)=>{
            console.error('Err: ',err)
        })
    },[])

  return (
    <section className={classes.products__container}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  );
}

export default Product
