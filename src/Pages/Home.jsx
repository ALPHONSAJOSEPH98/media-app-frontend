import React, { useState } from 'react'
import AddVideo from '../Components/AddVideo'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaHistory } from "react-icons/fa";
import ViewVideo from '../Components/ViewVideo';
import AddCategory from '../Components/AddCategory';
import Back from '../Components/Back';


function Home() {
  const [addvideoResponse ,setaddvideoResponse] = useState([])
  
  return (
    <div>
    <Row className='mt-5  '>
      <Col className='d-flex mb-5 mt-5 '>
       <h3 className=' ps-4 pe-4 text-light'>Upload Video</h3>
       <AddVideo setaddvideoResponse={setaddvideoResponse}    /> 
      </Col>
      <Col className=' text-center mt-5' >
       <Link to={'/history'}>
        <h3>Watch History <FaHistory /></h3> 
       </Link>
      </Col>
    </Row>
 
    <Row>
     <Col lg={9} >
      <h3 className='text-center mb-5 mt-5'>All Videos</h3>
      <ViewVideo addvideoResponse={addvideoResponse}   />
   
     </Col>
     <Col lg={3}>
      <h3 className='text-center  mb-5 mt-5'>Category</h3>
      <AddCategory/>
     </Col>
    </Row>
    <Back/>
</div>
  )
}

export default Home