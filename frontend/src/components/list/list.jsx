import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import { display } from '@mui/system';
import { useState } from 'react';
import { useRef } from 'react';
import ListItem from '../listItem/listItem';
import './list.scss';

const List = ()=>{
  const [slideNumber, setSlideNumber]= useState(0);
  const [isMoved, setIsMoved]= useState(false);
  const listRef=useRef()
  const handleClick=(direction)=>{
      setIsMoved(true);
      let distance = listRef.current.getBoundingClientRect().x - 50
      if(direction==="left" && slideNumber>0){
          setSlideNumber(slideNumber-1);
          distance=distance+230;
          listRef.current.style.transform = "translateX(" + distance + "px)";
          
      }
      if(direction==="right" && slideNumber<5){
        setSlideNumber(slideNumber+1);
        distance=distance-230;
        listRef.current.style.transform = "translateX(" + distance + "px)"
    }
  }
  return (
    <div className='list'>
        <span className="listTitle">Continue to Watch</span>
        <div className='wrapper'>
            <ArrowBackIosOutlined className='sliderArrow left' 
              onClick={()=>handleClick("left")}
              style={{display: !isMoved && "none"}} 
            />
            <div className='container' ref={listRef}>
                <ListItem index={0}/>
                <ListItem index={1}/>
                <ListItem index={2}/>
                <ListItem index={3}/>
                <ListItem index={4}/>
                <ListItem index={5}/>
                <ListItem index={6}/>
                <ListItem index={7}/>
                <ListItem index={8}/>
                <ListItem index={9}/>
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}

export default List;