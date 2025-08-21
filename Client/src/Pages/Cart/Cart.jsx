import React, { useContext } from 'react'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import classes from './Cart.module.css'

function Cart() {

  const [{basket,user},dispatch]=useContext(DataContext)
  const total = basket?.reduce((amount,item)=>item.price+amount,0)


  return (
    <>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your Shopping Cart</h3>
          <hr />
          {
            (basket?.length==0 ) ? (<p>Your Cart is empty!!!</p>) : (
              basket?.map((item,index)=>{
                return <ProductCard key={index} product={item} renderDesc={true} flex={true} renderAdd={false}/>
              }))

          }
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal: ({basket?.length})</p>
              <CurrencyFormat amount={total}/>
            </div>
            <span>
              <input type="checkbox" name="" id="" />
              <small>This order contains a gift</small>
            </span>
            <Link to={'/payment'}>Continue to checkout </Link>
        </div>
        )}

        
      </section>
    </>
  )
}

export default Cart
