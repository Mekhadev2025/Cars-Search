import React,{useEffect} from 'react'
import "../Cards/Card.css"
const Card = (props) => {
 
   useEffect(()=>{
    console.log(props.value.image)
   })


  return (
    <div className='cardContainer'>
        
      <img src={props.value.image} className='carCard'></img>
      <h2 className='carTitle'>{props.value.name}</h2>
    </div>
  )
}

export default Card
