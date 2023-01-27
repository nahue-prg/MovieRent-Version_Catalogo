import React from 'react'
import {BsFillCartFill} from "react-icons/bs";
import {Button} from 'reactstrap'; 

const CartWidget = ({number}) => {
  return (
    <div style={{
        display: 'inline-block',
      
        color:'white',
    }} >
    <Button
    color="white"
    style={{
        marginRight:10,
        borderColor: "white",
        color: "white",
        borderWidth: 1 ,
        display:'inline-block'
    }}
  >
   {number}
    </Button> 
    <BsFillCartFill/>
    </div>
  )
}

export default CartWidget

/* <Button
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
  </Button> */