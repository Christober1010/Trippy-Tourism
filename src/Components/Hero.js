import React from 'react'
import './Hero.css'
import {useNavigate} from 'react-router-dom'
function Hero({ data }) {
const navigate=useNavigate()
    return (
        <div>
            {
                data.map((item) => {
                    return <>
                        <div className='text-center'>
                            <img src={item.pic} className='bg' />
                            <div className='text-center mt-5 text-content'>
                                <div className='fs-1 fw-bold text-light title'>{item.title}</div>
                                <div className='fs-4 fw-bold text-light sub-head'>{item.para}</div>
                                {/* <button className='btn btn-sm btn-light mt-3 fw-bold' onClick={()=>navigate('#')}>View Plan </button> */}
                            </div>
                        </div>
                    </>
                })
            }

        </div>
    )
}

export default Hero