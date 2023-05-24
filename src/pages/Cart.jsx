import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {

  const {cart} = useSelector((state) => state)
  const [totalAmount,setTotalAmount] = useState(0)

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr) => acc + curr.price,0 ));
    //********This is special */
    //this applies reduce function(which is applied on Arrays)
  },[cart])

  return (
    <div>
      {
        cart.length > 0 ? ( 
          <div className='max-w-6xl flex mx-auto flex-col md:flex-row justify-center'>
            <div className=' flex flex-col w-full md:w-3/5'>

              {
                cart.map((item,index) =>{
                  return <CartItem item = {item} key = {item.id} itemIndex = {index} stylez={
                  index !== cart.length - 1 && "border-b-2"}></CartItem>
                })
              }

            </div>

            <div className=' mt-5 w-full md:w-2/5 flex flex-col p-5 gap-5 my-14 justify-between'>
              <div className='flex flex-col gap-5 '>
                  <div className='font-semibold text-xl text-green-800 '>Your Cart</div>
                  <div className='font-semibold text-5xl text-green-700  -mt-5'>Summary</div>
                  <p className=' text-xl text-gray-700 font-semibold'>
                    Total Items : <span>{cart.length}</span>
                  </p>
              </div>
              
              <div className='flex flex-col'>
                <p className='text-gray-700 font-semibold text-xl'>Total Amount <span className='text-xl font-bold'> ${totalAmount} </span></p>
                <button className='bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl'>
                  Checkout
                </button>
              </div>

            </div>
        </div> ) : ( 
          <div className='min-h-[80vh] flex flex-col items-center justify-center'>
            <h1 className='text-gray-700 font-semibold text-xl mb-2'>Cart Empty</h1>
            <Link to={"/"}>
              <button className='bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300
               ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider'>
                Shop Now
              </button>
            </Link>
          </div>
           )
      
      }
    </div>
  )
}

export default Cart