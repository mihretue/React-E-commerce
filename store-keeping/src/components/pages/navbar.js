import React from 'react'
import logo from '../res/ShopBag.jpg'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import {AiOutlineShoppingCart} from "react-icons/ai"

const List = styled.ul `
list-style:none;
display:flex;
margin-left:auto;
`
const Button = styled.button`
text-transform:capitalize;
margin-right:2rem;
border:none;
border-radius: 1rem;
color:#010302;
background-color:#5d30c7;
`
const Container = styled.div`
boarder:none;
margin-left:auto;
 @media (max-width:900px){
    justify-content:end;
 }
`


export default function navbar() {
  return (
    <nav className='navbar  navbar-expand-lg ' >
        <Link to='/about'>
        <img src={logo} alt='logo' className='navbar-brand ' style={{height:'10rem'}}/>
        </Link>
      <List className='navbar-nav '>
        <li className='nav-item ml-5 ' style={{textTransform:'capitalize',fontWeight:"bolder"}}>
            <Link to="/products" className='nav-link'>products</Link>
        </li>
      </List>
        <Container>
      <Link to='/carts' className='boarder-0'  >
        <Button className=''>
            <AiOutlineShoppingCart />
            my cart
        </Button>
      </Link>
      </Container>
    </nav>
  )
}
