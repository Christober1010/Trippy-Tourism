import React from 'react'
import Hero from './Hero'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const data = [
    {
      title: 'Contact',
      pic: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]
  const navigate = useNavigate()
  return (
    <div>
      <Hero data={data} />
      <div className='p-5'>
        <div className='row'>
          <div className='col-sm'>
            <div className='fs-1 fw-bold'>Feel free to Contact us</div>
          </div>
          <div className='col-sm'>
            <form>
              <div className='mb-3'>
                <label className='form-label'>First Name</label>
                <input className='form-control' type='text' placeholder='Trippy' />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Email ID</label>
                <input className='form-control' type='email' placeholder='Trippy@gmail.com' />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Mobile Number</label>
                <input className='form-control' type='number' placeholder='9876 5432 12' />
              </div>
              <div className='mb-3'>
                <textarea placeholder=' Message'></textarea>
              </div>
              <div className='mb-3'>
                <button className='btn btn-primary w-100' onClick={() => navigate('/')}>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact