import React, { useState } from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import Signup from './Signup'
function Navbar() {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const [showSignup, setShowSignup] = useState(false)
    return (
        <div className='text-light mt-4 px-2 rounded-4 navs'>
            <div className='align-items-center navbar'>
                <div className='fw-bolder fs-3 mx-2'>TRIPPY <i className='fa fa-map-marker text-danger'></i></div>
                <div className='menu-icons' onClick={() => setShowMenu(!showMenu)}>
                    <i className={showMenu ? 'fa fa-close text-danger' : 'fa fa-bars '}></i>
                </div>
                <div className={`${showMenu ? 'nav-menu active' : "nav-menu"}`}>
                    <div className='nav-links' onClick={() => navigate('/')}><i className='fa fa-home'></i> Home</div>
                    <div className='nav-links' onClick={() => navigate('/about')}><i className='fa fa-info-circle'></i> About</div>
                    <div className='nav-links' onClick={() => navigate('/service')}><i className='fa fa-briefcase'></i> Service</div>
                    <div className='nav-links' onClick={() => navigate('/contact')}><i className='fa fa-phone'></i> Contact</div>
                    <div className='btn btn-primary m-3' onClick={() => setShowSignup(!showSignup)}><i className='fa fa-user'></i> Sign up</div>
                </div>


            </div>
            <Modal isOpen={showSignup} toggle={() => setShowSignup(!showSignup)} size='lg' centered>
                <ModalHeader>Sign up</ModalHeader>
                <ModalBody><Signup /></ModalBody>
                <ModalFooter>
                    <button className='btn btn-success' onClick={()=>setShowSignup(!setShowSignup)}>Sign up</button>
                    <button className='btn btn-danger' onClick={() => setShowSignup(!showSignup)}>Close</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Navbar