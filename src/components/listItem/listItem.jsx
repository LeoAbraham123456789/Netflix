import { Add } from '@mui/icons-material'
import { ThumbDownOutlined } from '@mui/icons-material'
import { ThumbUpAltOutlined } from '@mui/icons-material'
import { PlayArrow } from '@mui/icons-material'
import { useState } from 'react'
import './listItem.scss'
import trailer from '/home/hp/React Projects/Projects/Netflix/netflix/src/Videos/trailer.mp4'



const ListItem = (index) => {
  const [isHovered, setIsHovered]=useState(false);
  return (
    <div className='listItem' 
    style={{left: isHovered && index.index*225 -50 + index.index*2.5}} 
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}
    >
      <img src="data:image/jpeg;base64,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" alt=''/>
        {isHovered && (
          <>
            <video src={trailer} autoPlay={true} loop/>
            <div className="itemInfo">
              <div className='icons'>
                <PlayArrow className='icon'/>
                <Add className='icon'/>
                <ThumbUpAltOutlined className='icon'/>
                <ThumbDownOutlined className='icon'/>
              </div>
            
              <div className='itemInfoTop'>
                <span>2 hour 45 mins</span>
                <span className='limit'>+16</span>
                <span>2022</span>
              </div>
              <div className='desc'>
                As a college professor's brutal murder sparks student unrest, a cop launches an investigation while a law.
              </div>
              <div className='genre'>Thriller</div>
            </div>
          </>
      )}
    </div>
  )
}

export default ListItem