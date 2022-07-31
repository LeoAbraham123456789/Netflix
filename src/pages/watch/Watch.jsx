import { ArrowBackOutlined } from '@mui/icons-material'
import './Watch.scss'
import trailer from '../../Videos/trailer.mp4'

const Watch = () => {
  return (
    <div className='watch'>
        <div className='back'>
            <ArrowBackOutlined/>
            Home
        </div>
        <video
            className='video'
            autoPlay={true}
            //onProgress={true}
            controls
            src={trailer}
        />
    </div>
  )
}

export default Watch