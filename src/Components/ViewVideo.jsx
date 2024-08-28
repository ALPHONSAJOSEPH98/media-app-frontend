import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import {  getVideoAPI } from '../Services/Allapis';



function ViewVideo(addvideoResponse) {
  
  const [deleteVideo ,setDeletevideo] = useState('')
  const [allVideos ,setAllVideos] =useState([])
 const getVideos =async()=>{
  try{
    const response = await getVideoAPI()
  // console.log(response)

  if(response.status>=200 && response.status<=300){
    // console.log(response.data)
    setAllVideos(response.data)
    
    
    
  }
  else{
    console.log(response.message);
    
  }
  }
  catch (error){
console.log(error);

  }
  
  
 }
 useEffect(()=>{
  getVideos(),[addvideoResponse, deleteVideo]
 })
  return (
    <div>
    <Row className='ps-5'  >
      {
        allVideos.length > 0 ?
        allVideos.map(item=>(
        <Col className='mt-4 mb-4'>
       <VideoCard  displayvideo={item} deleteVideo={setDeletevideo}  />
      </Col> 
        ))
      :
      <p>No videos found</p>
      }

    </Row>
    </div>
  )
}

export default ViewVideo