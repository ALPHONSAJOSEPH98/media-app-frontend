import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { IoMdVideocam } from "react-icons/io";
function Footer() {
  return (
    <div>
     <div className='border'>
     <MDBFooter bgColor='dark' className='text-center text-lg-start '>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className='text-light'>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h5 className='text-uppercase text-light fw-bold mb-4'>
              <IoMdVideocam className='me-2 fs-2' />
                Media Player
              </h5>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tenetur laborum nobis quisquam dolores aliquid quia maiores nemo debitis, quo recusandae ea! Sint quaerat ea fuga, dolorem accusantium quae praesentium.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Features</h6>
              <p>
                <a href='#!' className='text-reset'>
                 View video
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Add video
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Watch history
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Add category
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Upload video
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Watch history
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Category
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Contact me
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Kasragod , 671534
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                mediaplayer@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +91 7903363633
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> +91 9033536363
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='/'>
          Media Player
        </a>
      </div>
    </MDBFooter>
     </div>
      
    </div>
  )
}

export default Footer