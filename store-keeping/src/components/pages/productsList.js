import React from 'react'
import Title from './title'
import { useGetAllProductsQuery as gett, productsApi} from '../../features/productsApi'
import styled from 'styled-components';
import { useDispatch as dist } from 'react-redux';
import { addToCart } from '../../features/cartSlice';


export default function productsList() {
  const { data,error, isLoading} = gett();
  const dispatch = dist();

  const handleAddToCart = (product) =>{
      dispatch(addToCart(product));
  }
  
  return (
    <div className='container'>
      
      <Title name="Our" title="Products"/>
      <div className='row'>
        
      {isLoading? (<p>loading....</p>):error?(  
      <p>An error occured</p>
      ):( 
      <>
      <Productss className='products' >
        {data?.map(product =><div className='card' style={{width: '18rem',height:'22rem', marginBottom:'3rem',border:'none'}} key={product.id}>
          <h3 className='card-title' >{product.title}</h3>
          <img src={product.img} alt={product.title} className="card-img" style={{height:'10rem'}}/>
          <div className='card-body'>
              <p>{product.company}</p>
              <span className='price'>${product.price}</span>
          </div>
              <button onClick={()=> handleAddToCart(product)} type="button" className="btn btn-outline-success" style={{width:'10rem',justifyContent:"center",alignItems:'center'}}>Add To Cart</button>
        </div>)}
      </Productss>
      </>
        )}
        </div>
      </div>
    
  )
}



const Productss = styled.div`
display:flex;
justify-content: space-between;
flex-wrap:wrap;
margin-top:2rem;

@media(max-width:750px){
  margin-left: 25% ;
}


`

const Button = styled.button`
border:none;
width:4rem;
justify-content:center;
align-items:center;
`