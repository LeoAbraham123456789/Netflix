import React from 'react'
import { AcUnit } from '@material-ui/icons';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Navbar from '../../components/navbar/navbar';
import './home.scss';
import Featured from '../../components/featured/featured';
import List from '../../components/list/list';
const Home = ({type}) => {
  return (
    <div className='home'>
        <Navbar/>
        <Featured type={type}/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
  )
}

export default Home;
