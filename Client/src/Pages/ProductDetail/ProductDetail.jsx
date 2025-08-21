import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'



function ProductDetail() {
  let param = useParams()
  const {productId} = param
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
          setLoading(true);

    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then((res)=>{
      setProduct(res.data)

    }).catch((err)=>{
      console.log('Err: ',err)
    }).finally(()=>{
      setLoading(false)
    })
  },[productId])


  return (
    <div>
      {loading ? <Loader /> : product.id && <ProductCard product={product} flex={true} renderDesc={true} renderAdd={true}/>}
    </div>
  );
}

export default ProductDetail