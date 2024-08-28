import React from 'react'
import { Link } from 'react-router-dom'

function PathNotFound() {
  return (
    <div>
      <div  className='text-center mt-5 mb-4 rounded w-75 shadow container bg-dark'> <br />
         <img className='rounded shadow'  src="https://th.bing.com/th/id/OIP.IROq5Rkf2a-wKfXSxY5BqwHaFj?w=2000&h=1500&rs=1&pid=ImgDetMain" alt="" width={400} height={300} />
            <br />
         <h5 className='text-center mt-5'>Page Not Found</h5>
         <br />
         <Link to={'/'}>
          <button className='btn btn-light mb-4'>Go to home</button> 
         </Link>
         
         </div>
         </div>
  )
}

export default PathNotFound