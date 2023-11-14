import React from 'react'
import {BiSolidLeftArrowCircle} from "react-icons/bi"
import {GrFormSubtract} from "react-icons/gr"
import {AiOutlinePlus} from "react-icons/ai"

import { Link } from 'react-router-dom'
import { useSelector as selection } from 'react-redux/es/hooks/useSelector'
import { styled } from 'styled-components'



export default function cart() {
  //to access the state the cart
  const cart = selection((state)=>state.cart)


  return (
    <div className='container'>
      <h2>My Cart</h2>
      {cart.cartItems.length === 0 ? (<div>
        <p>Your cart is currently empty</p>
        <Link to="/" >
          <BiSolidLeftArrowCircle/>
          <span>back to shoping</span>
        </Link>
      </div>):(<div className='row'>
      <Table class="table table-hover" style={{border:''}}>
        <thead>
          <tr>
            <th >PRODUCT</th>
            <th >Price</th>
            <TH >Quantity</TH>
            <th >Total</th>
          </tr>
        </thead>
        <tbody>
        {cart.cartItems?.map(cartItem =>(
          <tr key={cartItem.id}>
            <td style={{width:"30rem",marginBottom:"2rem",marginRight:"2rem"}}>
              <div >
              <img src={cartItem.img} alt={cartItem.title} style={{width:"5rem", height:"6rem"}}/>
              <strong className='card-title'>{cartItem.title}</strong>
              <p className='card-body' >{cartItem.info}</p>
              </div>
            </td>
            <td>{cartItem.price}</td>
            <TD>
              <Button className='btn btn-outline-success'>
                <GrFormSubtract/>
              </Button>
                    {cartItem.cartQuantity}
              <Button className='btn btn-outline-success'>
                <AiOutlinePlus/>
              </Button>
            </TD>
            <td>{cartItem.price * cartItem.cartQuantity}</td>
          </tr>
          
        ))}

        </tbody>
</Table>
      </div>)}
    </div>
  )
}


const Table = styled.table`
border-radius:  2px;
text-align: left;
margin-bottom:3rem;
`
const Button = styled.button`
margin-left: 1rem;
margin-right:1rem;
width:3rem;
height:2rem;
`

const TH = styled.th`
margin-left:1rem;
text-align:center;
`

const TD = styled.td`
text-align:center;`