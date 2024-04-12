import React from 'react'
import Hero from './Hero'
import './service.css'
// import Count from './Count'
import CountUp from 'react-countup'


function Service() {
    const data = [
        {
            title: "What We Offer",
            pic: "https://images.unsplash.com/photo-1518231365576-99dafdedcd69?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
    return (
        <>
            <Hero data={data} />
            
            <div className='service-wrapper'>

                <div className='service text-light p-5 '>
                    <div className='row w-75 m-auto '>
                        <div className='col-lg mt-5'>
                            <div className='fw-bold'><img src='https://roam.qodeinteractive.com/wp-content/uploads/2017/08/about-2-custom-icon-1.png' />Asia</div>
                            <div>Lorem ipsum dolor sit amet, consec adipiscing elit. Etiam fermentum</div>
                        </div>
                        <div className='col-lg mt-5'>
                            <div>
                                <div className='fw-bold'><img src='https://roam.qodeinteractive.com/wp-content/uploads/2017/08/about-2-custom-icon-2.png' />Europe</div>
                                <div>Lorem ipsum dolor sit amet, consec adipiscing elit. Etiam fermentum</div>
                            </div>
                        </div>
                        <div className='col-lg mt-5'>
                            <div>
                                <div className='fw-bold'> <img src='https://roam.qodeinteractive.com/wp-content/uploads/2017/08/about-2-custom-icon-3.png' />Africa</div>
                                <div>Lorem ipsum dolor sit amet, consec adipiscing elit. Etiam fermentum</div>
                            </div>
                        </div>
                    </div>

                    <div className='row w-75 m-auto mb-5'>
                        <div className='col-lg mt-5'>
                            <div className='fw-bold'><img src='https://roam.qodeinteractive.com/wp-content/uploads/2017/08/about-2-custom-icon-4.png' />Asia</div>
                            <div>Lorem ipsum dolor sit amet, consec adipiscing elit. Etiam fermentum</div>
                        </div>
                        <div className='col-lg mt-5'>
                            <div>
                                <div className='fw-bold'><img src='https://roam.qodeinteractive.com/wp-content/uploads/2017/08/about-2-custom-icon-5.png' />Europe</div>
                                <div>Lorem ipsum dolor sit amet, consec adipiscing elit. Etiam fermentum</div>
                            </div>
                        </div>
                        <div className='col-lg mt-5'>
                            <div>
                                <div className='fw-bold'> <img src='https://roam.qodeinteractive.com/wp-content/uploads/2017/08/about-2-custom-icon-6.png' />Africa</div>
                                <div>Lorem ipsum dolor sit amet, consec adipiscing elit. Etiam fermentum</div>
                            </div>
                        </div>
                    </div>

                    <div className='explore'>Explore with Us</div>
                </div>
            </div>

            <div className='bg-light text-dark'>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-sm p-5'>
                            <div className='fw-bold fs-1'>Success Percentage</div>
                            <p>We help you explore your dream destinations without any risks</p>
                            <a href='/contact'><button className='btn btn-info'>Start Journey</button></a>
                        </div>
                        <div className='col-sm p-5'>
                            <div>
                                <div className='d-flex justify-content-between'>
                                    <div className='fw-bold'>Fast Booking</div>
                                    <div>64%</div>
                                </div>
                                <div className='max-bar mt-3'>
                                    <div className='value-bar' style={{ width: "64%" }}></div>
                                </div>
                            </div>

                            <div>
                                <div className='d-flex justify-content-between mt-4'>
                                    <div className='fw-bold'>Value for Money</div>
                                    <div>90%</div>
                                </div>
                                <div className='max-bar mt-3'>
                                    <div className='value-bar' style={{ width: "90%" }}></div>
                                </div>
                            </div>

                            <div>
                                <div className='d-flex justify-content-between mt-4'>
                                    <div className='fw-bold'>Beautiful places</div>
                                    <div>83%</div>
                                </div>
                                <div className='max-bar mt-3'>
                                    <div className='value-bar' style={{ width: "83%" }}></div>
                                </div>
                            </div>

                            <div>
                                <div className='d-flex justify-content-between mt-4'>
                                    <div className='fw-bold'>Support team</div>
                                    <div>87%</div>
                                </div>
                                <div className='max-bar mt-3'>
                                    <div className='value-bar' style={{ width: "87%" }}></div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className='pic'>
                <img src='https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h5-video-background-img.jpg' />
            </div>


            <div className=''>
                <div className='container-fluid about-features p-5'>
                    <div className='row w-75 m-auto'>

                        <div className='col-sm mt-3 '>
                            <div className='wrapper'>
                                <div className='circle'>
                                    <i className='fa fa-diamond fa-2x'></i>
                                </div>
                                <div className='fw-bolder text-light mt-4'>Special Activities</div>
                            </div>
                        </div>

                        <div className='col-sm mt-3'>
                            <div className='wrapper'>
                                <div className='circle'>
                                    <i className='fa fa-hourglass fa-2x'></i>
                                </div>
                                <div className='fw-bolder text-light mt-4'>Travel Arrangements</div>
                            </div>
                        </div>

                        <div className='col-sm mt-3'>
                            <div className='wrapper'>
                                <div className='circle'>
                                    <i className='fa fa-map   fa-2x'></i>
                                </div>
                                <div className='fw-bolder text-light mt-4'>Location Manager</div>
                            </div>
                        </div>

                        <div className='col-sm mt-3'>
                            <div className='wrapper'>
                                <div className='circle'>
                                    <i className='fa fa-user  fa-2x'></i>
                                </div>
                                <div className='fw-bolder text-light mt-4'>Your Private Guide</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className='scores-bg'>
                <div className='score-overlay text-light p-5'>
                    <div className='row w-75 m-auto mt-5 text-center'>
                        <div className='col-sm'>
                            <div className='fs-1 fw-bold'>
                                <CountUp
                                    end={1985}
                                    duration={3}
                                />
                            </div>
                            <h6>Cups of Coffe and Tea</h6>
                        </div>
                        
                        <div className='col-sm'>
                            <div className='fs-1 fw-bold'>
                                <CountUp
                                    end={28}
                                    duration={3}
                                />+
                            </div>
                            <h6>Experience</h6>
                        </div>

                        <div className='col-sm'>
                            <div className='fs-1 fw-bold'>
                                <CountUp
                                    end={291}
                                    duration={3}
                                />K
                            </div>
                            <h6>Projects</h6>
                        </div>

                        <div className='col-sm'>
                            <div className='fs-1 fw-bold'>
                                <CountUp
                                    end={123}
                                    duration={3}
                                />
                            </div>
                            <h6>Awards</h6>
                        </div>

                        <div className='col-sm'>
                            <div className='fs-1 fw-bold'>
                                <CountUp
                                    end={945}
                                    duration={3}
                                />
                            </div>
                            <h6>Professional Services</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className='text-center'>
                    <div className='row w-75 m-auto'>
                        <div className='col-sm banners'>
                            <img src='https://roam.qodeinteractive.com/wp-content/uploads/2017/08/about-2-client-img-1-h.png'/>
                        </div>
                        <div className='col-sm banners'>
                            <img src='https://roam.qodeinteractive.com/wp-content/uploads/2017/08/about-2-client-img-2-h.png'/>
                        </div>
                        <div className='col-sm banners'>
                            <img src='https://roam.qodeinteractive.com/wp-content/uploads/2017/08/about-2-client-img-3-h.png'/>
                        </div>
                        <div className='col-sm banners'>
                            <img src='https://roam.qodeinteractive.com/wp-content/uploads/2017/08/about-2-client-img-4-h.png'/>
                        </div>
                        <div className='col-sm banners'>
                            <img src='https://roam.qodeinteractive.com/wp-content/uploads/2017/08/about-2-client-img-5-h.png'/>
                        </div>
                        <div className='col-sm banners'>
                            <img src='https://roam.qodeinteractive.com/wp-content/uploads/2017/08/about-2-client-img-6-h.png'/>
                        </div>
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default Service