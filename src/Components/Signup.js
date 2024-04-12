import React from 'react'

function Signup() {
    return (
        <div>
            <div className='row'>
                <div className='col-sm bg-primary p-0'>
                    <img height={'100%'} width={'100%'} src='https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
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
                            
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup