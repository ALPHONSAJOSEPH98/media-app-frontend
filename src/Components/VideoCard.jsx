import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

import Card from 'react-bootstrap/Card';

import { MdDelete } from "react-icons/md";
import { addHistoryApi, deleteVideoApi } from '../Services/Allapis'
import Swal from 'sweetalert2'
function VideoCard({displayvideo,deleteVideo }) {
    const [show, setShow] = useState(false);
    
    const handleDelete=async(id) =>{
      try{
        const response = await deleteVideoApi(id)
       
         if(response.status>=200 && response.status<=300){
          deleteVideo(response)
         console.log(response);
         Swal.fire({
          title: 'Success',
          text: 'Video Deleted Successfully',
          icon: 'success',
          confirmButtonText: '  back'
        })}
        else{
          console.log(response.message);
          
          Swal.fire({
            title: 'Success',
            text: response.message,
            icon: 'error',
            confirmButtonText: '  Ok'
          })
        }
      }
       catch(error){
       
        console.log(error);
        
       }
       
    }
  const handleClose = () => setShow(false);
  const handleShow =async () => {
    setShow(true);
    const {caption , embedLink} =displayvideo
    let today = new Date()
    console.log(today);
    let timestamp = new Intl.DateTimeFormat('en-us' ,{year:'numeric' ,
      day:'2-digit' , month:'2-digit' ,hour:'2-digit', minute:'2-digit',second:'2-digit'

    }).format(today)
    console.log(timestamp);
    let videoDetails= {
      caption ,
      embedLink,
      timestamp
    }
    const response = await addHistoryApi(videoDetails)
    console.log(response);
    
    
  }
   const dragStarted = (e,id)=>{
    console.log("video drag started  " +id ,e);
    e.dataTransfer.setData("videoId" ,id)
   }
   
  return (
    <div>
     <Card className='mt-3' draggable ={true} onDragStart={e=>dragStarted(e,displayvideo.id)}  style={{width:230}} >
       <Card.Img width={200} height={250} variant="top" src={displayvideo.url} onClick={handleShow} />
       <Card.Body className='d-flex justify-content-between'>
       <Card.Title className='text-light' >{displayvideo.caption}</Card.Title>
       <Card.Text>
          
        </Card.Text>
         <Button onClick={()=>handleDelete(displayvideo.id)} className='p-2 ' variant="dark"><MdDelete  /></Button>
        </Card.Body>
     </Card>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Watch Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="450" height="315" src={displayvideo.embedLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default VideoCard