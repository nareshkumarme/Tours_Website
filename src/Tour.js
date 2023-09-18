import React, { useState } from 'react'



const Tour = ({tour,removeTour}) => {
  const [expanded, setExpanded] = useState(false);
  const [readmore , setReadmore] = useState(false)
    const {id,image,name,price,info} = tour;
   
    return (
    <article className ="container" key ={id}>
        <img src={image} width="100px" height="100px" className='image' />

        <footer className='footer'>
        <div className='tour-info'>
        <h3 className='tour-name'>{name}</h3>
        <p className='tour-price'>${price}</p>
        </div>
      <p className={expanded ? 'expanded' : ''}>{readmore? info:`${info.substring(0,200)}...`}
      <button className='info-btn' onClick={() => setReadmore(!readmore)}>{readmore? `See Less`:`Read More`}</button>
      </p>
       
       <button onClick={() =>removeTour(id)}  className='footer-btn'>Not Interested</button>
       </footer>
      
      
    </article>
    
  )
}

export default Tour
