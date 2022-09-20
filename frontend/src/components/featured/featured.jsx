import { InfoOutlined } from '@mui/icons-material';
import { PlayArrow } from '@mui/icons-material';
import React from 'react'
import './featured.scss'

const Featured = ({type}) => {
  return (
    <div className='featured '>
        {type && (
          <div className='category'>
            <span>{type === "movies"? "Movies":"Series"}</span>
            <select name='genre' id='genre'>
              <option>Genre</option>
              <option value='adventure'>Adventure</option>
              <option value='comedy'>Comedy</option>
              <option value='crime'>Crime</option>
              <option value='fantasy'>Fantasy</option>
              <option value='historical'>Historical</option>
              <option value='horror'>Horror</option>
              <option value='romance'>Romance</option>
              <option value='sci-fi'>Sci-Fi</option>
              <option value='thriller'>Thriller</option>
              <option value='western'>Western</option>
              <option value='animation'>Animation</option>
              <option value='drama'>Drama</option>
              <option value='documentary'>Documentary</option>
            </select>
          </div>
        )}
        <img src='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f8375136e16c3b64fe7450905d55708f2326d81326b4d78a3ccf20c4e37b8037._RI_.jpg' 
          alt=''
        />
        <div className="info">
          <img
            src='https://upload.wikimedia.org/wikipedia/en/d/dd/Bajrangi_Bhaijaan_Poster.jpg'
            alt=''          
          />
          <span className='desc'>
            I am Leo dffvdjfbvuj dfbvsdfnkjnidvmf vdnjknfjdklvbdfvkjdfb;dfjkvnkjdfvkjndvfsdvlknsoivjdvudvjdvubdjkvdbvsjv
            I am Leo dffvdjfbvuj dfbvsdfnkjnidvmf vdnjknfjdklvbdfvkjdfb;dfjkvnkjdfvkjndvfsdvlknsoivjdvudvjdvubdjkvdbvsjv
           
          </span>
          <div className="buttons">
            <button className='play'>
                <PlayArrow/>
                <span>play</span>
            </button>
            <button className='more'>
                <InfoOutlined/>
                <span>info</span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Featured;
