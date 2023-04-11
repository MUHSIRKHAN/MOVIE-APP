import React from 'react'
import "./Moviecard.scss"

const Moviecard = ({data}) => {
  console.log(data);
 
  return (
    <div className='card-item'>
      <div className='card-inner'>
        <div className='card-top'>
      
          <img src={data.Poster} alt={data.Title}></img>
        </div>
        <div className='card-bottom'>
          <div className='card-info'>
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Moviecard
