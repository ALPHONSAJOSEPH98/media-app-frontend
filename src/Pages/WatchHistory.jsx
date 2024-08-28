import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import {watchHistoryApi} from "../Services/Allapis"
import {deleteHistory} from "../Services/Allapis"
import Swal from 'sweetalert2'


function WatchHistory() {
  const [history , setWatchHistory] =useState([])
  const [Delete , setDeletehistory] = useState('')
  const watchHistory =async()=>{
    
    const response = await watchHistoryApi()
    setWatchHistory(response.data)
    console.log(response.data);
    
  }
 const handleDelete=async(id)=>{
  const response = await deleteHistory(id)
  console.log(response);
  setDeletehistory(response.data)
  Swal.fire({
    title: 'Success',
    text: 'Video Deleted Successfully',
    icon: 'success',
    confirmButtonText: '  back'
  })
  
 }
  useEffect(()=>{
    watchHistory()
  },[Delete])
  return (
    <div>
      <Row className='mt-5 mb-5'>
         <Col className='ms-5'>
         <h4 className='text-light text-center'>Watch history</h4>
         <Table className='border' responsive="sm">
        <thead>
          <tr >
            <th className='border'>Sl no</th>
            <th className='border'>Caption</th>
            <th className='border text-center'>Url</th>
            <th className='border'>Time Stamp</th>
            <th className='border'> Action</th>
           
          </tr>
        </thead>
        <tbody>
          { history? 
          history.map((item, index)=>(
          <tr>
            <td className='border'>{index+1}</td>
            <td className='border'>{item.caption}</td>
            <td className='border'><a href={item.embedLink}>{item.embedLink}</a></td>
            <td className='border'>{item.timestamp} </td>
            <td className='text-center'><button onClick={()=>handleDelete(item.id)} className='btn btn-dark'><MdDelete className='fs-2' /></button></td>
            
          </tr>
          )):"data not found"
          }
          
        </tbody>
      </Table>
         </Col>
         <Col className=''>
          <Link to={'/home'} >
          <h4 className='text-light text-center'>Back to home <IoArrowBackCircleSharp /></h4>
          </Link>
         
         </Col>
      </Row> 
    </div>
  )
}

export default WatchHistory