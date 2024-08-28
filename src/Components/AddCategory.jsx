import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, deletecategory, getAvideo, getCategoryApi, updateCategory } from '../Services/Allapis';
import Swal from 'sweetalert2'
import { AiFillDelete } from "react-icons/ai";
import VideoCard from './VideoCard';




function AddCategory() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow =() =>  setShow(true)
    const [category , setcategory] =useState({
      category: "" ,
      allvideos : []
        })
      
    const handleadd = async() => { 
     
      const body ={
         category ,
         allvideos: []
        
      }
      if(category){
        try{
          const response = await addCategoryApi(body)
          console.log(response);
          setcategory([])
          Swal.fire({
            title: 'Success',
            text:"Category added " +category ,
            icon: 'success',
            confirmButtonText: '  Ok'
          })
           
          handleClose()
         
        }
        catch(error){
          console.log(error);
          
        }
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
       

  
      const [Data , setdata] =useState([])
    const viewCategory = async()=>{
      const response = await getCategoryApi()
        //  console.log(response.data);
         setdata(response.data)
        //  console.log(Data);
         
         
    }

    const [DeleteCategory ,setDeleteCategory ] =useState("")
    const deleteCategory = async(id)=>{
    
    const response = await deletecategory(id)
    
    Swal.fire({
      title: 'Success',
      text: 'Category Deleted Successfully',
      icon: 'success',
      confirmButtonText: '  back'
    })
    setDeleteCategory(response.data)
    }

    const videoDrop=async(e,id)=>{
    console.log("video drop" +id ,e);
    const videoId = e.dataTransfer.getData("videoId")
    console.log(videoId);
    // get particular video
     const {data} = await getAvideo(videoId)
     console.log(data);
     // get category details
      const selectCategory = Data?.find(item=>item.id===id)
      console.log(selectCategory);
      // add videos into the allvideos category
     selectCategory.allvideos.push(data)
     await updateCategory(id, selectCategory)
     
     viewCategory()
    e.preventDefault()
    
    }

    const dragover =(e)=>{
    console.log("video drag over");
    e.preventDefault()
    }
   useEffect(()=>{viewCategory()},[DeleteCategory,Data])
 
    
  return (
    <div className='text-center '>
       <Button variant="primary" onClick={handleShow}>
        Add Category
      </Button> <br />

      <div className='row mt-4 me-2 ms-1 mb-3'>
       { Data.length>0 ? Data.map(item=>(
         <div  onDragOver={e=>dragover(e)} onDrop={(e)=>videoDrop(e,item.id)} className=' border me-1 mb-3'>
         <h5 className='mt-3 text-light'>{item.category}</h5>
         <div className='text-center' >
           { item.allvideos && item.allvideos.map((data)=>(
            <VideoCard displayvideo={data}/>
           )) }
           </div>
         <button className='btn ' onClick={()=>deleteCategory(item.id)}><AiFillDelete className='fs-3 text-light' /></button>
           
         </div>
          
       )): <p>no data found</p>
       
        }
         
         <div>

         </div>
      </div>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='border p-2'>
                <input className='form-control' onChange={(e)=>setcategory(e.target.value)} type="text" placeholder='Add Category Name' />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button  variant="primary" onClick={handleadd}>
            Add 
          </Button>
        </Modal.Footer>
      </Modal> 
    </div>
  )
}

export default AddCategory