import React, { useEffect } from 'react'
import "./Moviedetail.scss";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMoviesOrShowDeatils ,getSelectedMovieOrShow} from '../../features/Movies/MovieSlice';

const Moviedetails = () => {
  const{imdbID}=useParams(); 
  const dispatch=useDispatch() 
  const data=useSelector(getSelectedMovieOrShow)   //to get details from store
console.log(data);
  useEffect(()=>{

    dispatch(fetchAsyncMoviesOrShowDeatils(imdbID))

  },[dispatch,imdbID])   //when ever id changes==imdbID
  return (
    <div className='movie-section'>
    <div className=' section-left'>
      <div className='movie-title'>{data.Title} 
      <div className='movie-rating'>
        <span>
          IMDB Rating<i className='fa-fa-star'></i>:{data.imdbRating}
        </span>
        <span>
          IMDB Votes<i className='fa-fa-thumbs-up'></i>:{data.imdbVotes}
        </span>
        <span>
          IMDB Runtime<i className='fa-fa-film'></i>:{data.Runtime}
        </span>
        <span>
          IMDB year<i className='fa-fa-calender'></i>:{data.Year}
        </span>
      </div>
      <div className='movie-plot'>{data.plot}</div>
      <div className='movie-info'>
        <span>Director</span>
        <span>{data.Director}</span>
   
      <span>Stars</span>
      <span>{data.Stars}</span>
<div>
  <span>Geners</span>
  <span>{data.Genre}</span>
</div>
<div>
  <span>Language</span>
  <span>{data.Language}</span>
</div>
<div>
  <span>ACTORS</span>
  <span>{data.Actors}</span>
</div>

      </div>
    </div>
    </div>
    <div className='section-right'>
      <img src={data.Poster} alt={data.Title}></img>

    </div>
    </div>
    
  )
}

export default Moviedetails
