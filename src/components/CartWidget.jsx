import React from 'react'
import {BsFillCartFill} from "react-icons/bs";
import {Button} from 'reactstrap'; 

const CartWidget = ({number}) => {
  return (
    <div style={{
        display: 'inline-block',
        textDecoration:'none',
        color:'white',
    }} className='pointer'>
     <Button
    color="white"
    size="sm"
    outline
    style={{
        marginRight:10,
        borderRadius:200,
        borderColor: "white",
        color: "white",
        borderWidth: 1 
    }}
  >
   {number}
  </Button>
    <BsFillCartFill/>
    </div>
  )
}

export default CartWidget