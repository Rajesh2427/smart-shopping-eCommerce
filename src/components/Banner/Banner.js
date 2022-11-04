import React from 'react'
import './Banner.css'

import TV from '../../assets/BannerImages/TVBannerImage.png'
import Offer from '../../assets/BannerImages/offerBannerImage.png'



const Banner = () => {
  return (
    <div   id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-inner container-fluid">
    <div className="carousel-item active main-banner" style={{background:`url(${TV})`, backgroundPosition: 'center', backgroundRepeat:'no-repeat'}}>
     
    </div>
    <div className="carousel-item main-banner" style={{background:`url(${Offer})`, backgroundPosition: 'center', backgroundRepeat:'no-repeat'}}>
      
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon shadow-lg bg-dark rounded-3 p-2" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon shadow-lg bg-dark rounded-3 p-2" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Banner