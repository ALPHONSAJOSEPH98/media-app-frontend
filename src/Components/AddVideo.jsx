import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoMdCloudUpload } from "react-icons/io";
import { MdOndemandVideo } from "react-icons/md";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideoAPI } from '../Services/Allapis';
import Swal from 'sweetalert2'


function AddVideo({setaddvideoResponse}) {
     
     const [video ,setVideo]=useState({
      caption:"" ,
      url:"",
      embedLink:""
     })
    // console.log(video);
    const getEmbedLink=(e)=>{
    //  console.log(e.target.value)
     const {value} = e.target
      // console.log(value);
      // console.log(value.slice(-31)); //to slice particular key for videos 
      // set link  
      const link =`https://www.youtube.com/embed/${value.slice(-31)}`
      setVideo({...video,embedLink:link})
      
    }
    const handleUpload = async()=>{
      const {caption,url,embedLink} =video
      if((!caption||!url||!embedLink)){
       
        Swal.fire({
          title: 'input empty',
          text: " Please Fill the fields",
          icon: 'warning',
          confirmButtonText: 'Ok'
        })
        
      }
      else{
         try{
          const response = await addVideoAPI(video)
         console.log(response);
         
         if(response.status>=200 && response.status<=300){

          setaddvideoResponse(response.data)
        //  console.log(response.data)
        
        handleClose()
          Swal.fire({
            title: 'Success',
            text: 'Video Added Successfully',
            icon: 'success',
            confirmButtonText: '  Ok'
          })
          setVideo([])
         
         }
         else{
          console.log(response.message);
          Swal.fire({
            title: 'error',
            text: response.message,
            icon: 'error',
            confirmButtonText: '  Ok'
          })
          
         }
         }
         catch(err){
          console.log(err);
          
         }
      }
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
    <Button className='btn btn-dark p-0' variant="primary" onClick={handleShow}>
    <IoMdCloudUpload className='fs-1' />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header  closeButton>
          <Modal.Title><MdOndemandVideo className='fs-2' /> Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <div className='border p-4'>
          <FloatingLabel
        controlId="floatingInput"
        label="Video Caption"
        className="mb-3"
      >
        <Form.Control onChange={e=>setVideo({...video,caption:e.target.value})} type="text" placeholder="Video Caption" />
         </FloatingLabel>
        
        <FloatingLabel controlId="floatingPassword" label="Video Image">
        <Form.Control onChange={e=>setVideo({...video,url:e.target.value})} type="text" placeholder="Video Image" />
        </FloatingLabel>
        <FloatingLabel className='mt-3' controlId="" label="Video URL">
        <Form.Control onChange={getEmbedLink} type="text" placeholder="Video URL" />
      </FloatingLabel>

         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Cancel
          </Button>
          <Button onClick={handleUpload} variant="dark">Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddVideo 



