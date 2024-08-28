import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { IoMdVideocam } from "react-icons/io";
function Header() {
  return (
    <div> 
     
  <Navbar className="bg-body-dark text-light">
        <Container>
          <Navbar.Brand href="#home" className='text-light fs-1'>
           
           <IoMdVideocam className='me-3' /> Media Player
          </Navbar.Brand>
        </Container>
      </Navbar>
  </div>
  )
}

export default Header