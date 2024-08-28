import React from 'react'
import { Link } from 'react-router-dom'

function Back() {
  return (
    <div>
        <div className='text-center mt-3 mb-3'>
            <Link to={'/'}>
            <button className='btn btn-light'>Back</button>
            </Link>
           
        </div>
    </div>
  )
}

export default Back