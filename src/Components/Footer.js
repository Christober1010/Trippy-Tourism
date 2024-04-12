import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate=useNavigate()
    return (
        <div className='bg-dark text-light p-4'>
            <div className='row'>
                <div className='col-sm'>
                    <div className='fw-bold  text-warning mb-2'>Trippy</div>
                    <p>7,Main road,Chennai</p>
                    <p>+91 98765 32145</p>
                    <p>Triipy@gmail.com</p>
                </div>
                <div className='col'>
                    <div className='fw-bold text-warning mb-2'>Quick Links</div>
                    <div className='d-flex gap-2'>

                        <div onClick={()=>navigate('/')}><i className='fa fa-home'></i></div>
                        <div onClick={()=>navigate('/about')}><i className='fa fa-info-circle'></i></div>
                        <div onClick={()=>navigate('/service')}><i className='fa fa-briefcase'></i></div>
                        <div onClick={()=>navigate('/contact')}><i className='fa fa-phone'></i></div>
                    </div>
                </div>
                <div className='col'>
                    <div className='fw-bold text-warning'>Communities</div>
                    <div className='d-flex gap-2 justify-content-start'>
                        <div><i className='fa fa-git'></i></div>
                        <div><i className='fa fa-twitter'></i></div>
                        <div><i className='fa fa-facebook'></i></div>
                        <div><i className='fa fa-whatsapp'></i></div>
                        <div><i className='fa fa-linkedin'></i></div>
                    </div>
                </div>
                <div className='col'>
                    <div className='text-warning fw-bold '>Designed by</div>
                    <div><span className='badge bg-primary'>CHRISTO</span></div>
                </div>
            </div>
        </div>
    )
}

export default Footer