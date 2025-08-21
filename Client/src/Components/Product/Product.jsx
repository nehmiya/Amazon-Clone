import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ProductCard from './ProductCard.jsx';
import classes from './Product.module.css'
import Loader from '../../Components/Loader/Loader'


function Product() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        axios.get('https://fakestoreapi.com/products')
        .then((response)=>{
            setProducts(response.data)
        }).catch((err)=>{
            console.error('Err: ',err)
        }).finally(()=>{
            setLoading(false);
        })
    },[])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className={classes.products__container}>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} renderAdd={true}/>
          ))}
        </section>
      )}
    </>
  );
}

export default Product
