import React from 'react'
import Hero from './Hero'
import './about.css'
function About() {
  const data = [
    {
      title: "About",
      pic: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]
  return (
    <>
      <Hero data={data} />
      <div className='about'>
        <div className='container-fluid about-features p-5'>
          <div className='row w-75 m-auto'>

            <div className='col-sm mt-3'>
              <div className='wrapper'>
                <div className='circle'>
                  <i className='fa fa-diamond fa-2x'></i>
                </div>
                <div className='fw-bolder text-light mt-4'>Adventure Time</div>
              </div>
            </div>

            <div className='col-sm mt-3'>
              <div className='wrapper'>
                <div className='circle'>
                  <i className='fa fa-pencil fa-2x'></i>
                </div>
                <div className='fw-bolder text-light mt-4'>Branding project</div>
              </div>
            </div>

            <div className='col-sm mt-3'>
              <div className='wrapper'>
                <div className='circle'>
                  <i className='fa fa-star   fa-2x'></i>
                </div>
                <div className='fw-bolder text-light mt-4'>Promotion & Events</div>
              </div>
            </div>

            <div className='col-sm mt-3'>
              <div className='wrapper'>
                <div className='circle'>
                  <i className='fa fa-bookmark  fa-2x'></i>
                </div>
                <div className='fw-bolder text-light mt-4'>Color it all</div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-sm p-5'>
              <img src='https://roam.qodeinteractive.com/wp-content/uploads/2017/08/about-1-img-1.jpg' className='sub-img' />
            </div>
            <div className='col-sm mt-5 p-4'>
              <div className='fw-bold fs-1'>About our agency</div>
              <p className='sub-para'>Aerial view of Cape Town with Cape Town Stadium</p>
              <p>Explore Trippy's vibrant laneways, renowned street art, and eclectic cafes, immersing yourself in the city's thriving cultural scene. Traverse the scenic Great Ocean Road or venture into the lush Yarra Valley for a taste of Victoria's picturesque landscapes and renowned wineries. Our experienced guides ensure every moment is filled with discovery and delight, creating memories to last a lifetime. Embark on a journey with us and unlock the hidden gems of Melbourne and its surrounds</p>
              <a href='/contact'><button className='btn btn-primary'>Contact us</button></a>
            </div>
          </div>
        </div>
      </div>

      <div className='about-fav mt-5'>
        <div className='container mt-5 p-5'>
          <div className='text-center'>
            <div className='sub-para fw-bold'>Modern & Beatuiful</div>
            <div className='fw-bold fs-1'>Most Popular Adventures We Have</div>
          </div>

          <div className='row'>
            <div className='col mt-4'>
              <div className='cards '>
                <div><img src='https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h1-tour-f-img-2.jpg' /></div>
                <div className='card-content bg-light p-0'>
                  <div className='d-flex justify-content-between mx-3 p-3'>
                    <div className='fw-bold'>Discover Costa Rica</div>
                    <div className='badge bg-success'>$ 7678</div>
                  </div>
                  <p className='mx-4'>Costa Rica is small country in Central America. It is bordered by Nicaragua to the north and Panama to the south. The Caribbean Sea is to the east and the Pacific Ocean is to the west</p>
                  <div className='bg-warning p-3 mt-4 d-flex justify-content-between px-5'>
                    <div>
                      <i className='fa fa-clock-o'></i> 10 Days+
                    </div>
                    <div>
                      <i className='fa fa-address-card'></i> 16+
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col mt-4'>
              <div className='cards'>
                <div><img src='https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h1-tour-f-img-1.jpg' /></div>
                <div className='card-content bg-light p-0'>
                  <div className='d-flex justify-content-between mx-3 p-3'>
                    <div className='fw-bold'>India is for Everyone</div>
                    <div className='badge bg-dark'>$ 1350</div>
                  </div>
                  <p className='mx-4'>Indian Tourism sector ranks among the fastest-growing economic sectors in the country. India serves such a diversity of culture, provides a rich history, jaw-dropping landscapes.</p>
                  <div className='bg-warning p-3 mt-4 d-flex justify-content-between px-5'>
                    <div>
                      <i className='fa fa-clock-o'></i> 10 Days+
                    </div>
                    <div>
                      <i className='fa fa-address-card'></i> 16+
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col mt-4'>
              <div className='cards'>
                <div className='card-wrapper'><img src='https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h1-tour-f-img-3.jpg' /></div>
                <div className='card-content bg-light p-0'>
                  <div className='d-flex justify-content-between mx-3 p-3'>
                    <div className='fw-bold'>Thai Island to visit</div>
                    <div className='badge bg-primary'>$ 7678</div>
                  </div>
                  <p className='mx-4'>It is where Chinese and Portuguese cultures merge to create a unique atmosphere. There are many beautiful beaches in Phuket, which offer some of the best sunset views.</p>
                  <div className='bg-warning p-3 mt-4 d-flex justify-content-between px-5'>
                    <div>
                      <i className='fa fa-clock-o'></i> 10 Days+
                    </div>
                    <div>
                      <i className='fa fa-address-card'></i> 16+
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='offer'>

        <div className='offer-wrapper'>
          <div className='row'>
            <div className='col-sm'>
              <img className='p-5 overlay' src='https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h3-img-1.png' />
            </div>
            <div className='col-sm p-5'>
              <div className='offer-text'>Last Minute Offer For You</div>
              <p className='fw-bold fs-1 text-light'>Aerial view of Cape Town with Cape Town Stadium</p>
              <a href='/contact'><button className='btn btn-primary'>VIEW MORE</button></a>


            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About