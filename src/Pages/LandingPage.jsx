import React from 'react'
import mediaimage from '../assets/20-55-04-536_512.gif'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
     <section>
      <div className='d-flex justify-content-evenly'>
        <div className='col-3 mt-5'>
          <h2>Welcome To <b className='text-warning'> Media Player</b></h2>
          <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, perferendis esse similique neque voluptatem voluptates sequi nulla et repellendus ipsum? 
            Consectetur neque quo nostrum iste ipsam quibusdam veritatis perferendis eveniet?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi esse distinctio soluta officiis, hic accusantium nobis, vero id, illum autem harum ducimus saepe. Doloribus, accusantium neque? Facere assumenda quod porro.</p>
           <Link to={'/home'}>
           <button className='btn btn-warning '>Get started</button>
           </Link>
            
        </div>
        <div className='col-4 rounded '>
          
          <img className='w-100 container' height={500}  src={mediaimage} alt="" />
        </div> 
      </div> </section><br />
      <section>
       <h3 className='text-center mt-5'>Features</h3> <br />
      <div className='d-flex justify-content-evenly'> 
      <div className='col-3 border rounded  text-center pt-2'>
      <Card className='w-100' >
      <Card.Img className='w-100 container-sm' variant="top" src="https://cdn.pixabay.com/photo/2016/11/21/12/51/mobile-phone-1845233_1280.jpg" />
      <Card.Body>
        <Card.Title>Best experience</Card.Title>
        <Card.Text>
        An interactive zoom feature allows magnifying into video during playback. Still images can be extracted from video at original resolution, and individual frames can be stepped through, although only in forward direction
        <br /><br />
        </Card.Text>
       
      </Card.Body>
    </Card>
        
       </div>
      <div className='col-3  rounded text-center border pt-2'>
       
          <Card className='w-100' >
      <Card.Img className='w-100 container-sm' variant="top" src="https://cdn.pixabay.com/photo/2016/11/21/12/51/mobile-phone-1845233_1280.jpg" />
      <Card.Body>
        <Card.Title>Video Quality</Card.Title>
        <Card.Text className='mb-5'>
        Playback can be gamified by splitting the picture inside the viewport into draggable puzzle pieces,
        where the row and column count can be set as desired. <br /> <br />
        </Card.Text>
       
      </Card.Body>
    </Card>
         </div>
      <div className='col-3  rounded text-center border '>
        
       <Card  className='w-100' >
      <Card.Img className='w-100 container-sm' variant="top" src="https://cdn.pixabay.com/photo/2016/11/21/12/51/mobile-phone-1845233_1280.jpg" />
      <Card.Body>
        <Card.Title>Better Sound</Card.Title>
        <Card.Text className='mb-2'>
        Enjoy a cinema-like experience with TrueTheater audiovisual enhancements .
        Play media in virtually any format with all major formats supported  <br /><br /> <br /><br />
        </Card.Text>
       
      </Card.Body>
    </Card>
      </div>
      </div>
      </section>
      <br />
      <div className='w-75 container mt-5 border d-flex justify-content-around '>
        <div className='col-4 mt-5'><h3>Simple Fast and Powerful</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, alias quam suscipit molestias laborum voluptas iusto error vero voluptatum.
           Consequatur eaque id iure autem. Sequi rerum dignissimos itaque officiis nulla.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus beatae illo ut sunt voluptatem commodi sint pariatur sed recusandae magni, eius est, perspiciatis deleniti inventore. 
           Sint quas nesciunt maiores hic.</p>
           </div>
        <div className='w-50 mt-3'>
        <iframe className='w-100 ' height="500" src="https://www.youtube.com/embed/fqLCas2sWW0?si=N1gtQ84x4okqtk4-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div> <br /><br />
      
     
    </div>
  )
}

export default LandingPage