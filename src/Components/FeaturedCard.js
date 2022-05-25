import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import "../style/FeaturedCard.css";

function FeaturedCards() {
  const data = [
    {
      icon: "https://res.cloudinary.com/dwbno71qd/image/upload/v1653254028/Realmod/parking-area_1_nmpkt0.png",
      description: "Parking Space"
    },
    {
      icon: "https://res.cloudinary.com/dwbno71qd/image/upload/v1653254028/Realmod/parking-area_1_nmpkt0.png",
      description: "Parking Space"
    },
    {
      icon: "https://res.cloudinary.com/dwbno71qd/image/upload/v1653254028/Realmod/parking-area_1_nmpkt0.png",
      description: "Parking Space"
    },
    {
      icon: "https://res.cloudinary.com/dwbno71qd/image/upload/v1653254028/Realmod/parking-area_1_nmpkt0.png",
      description: "Parking Space"
    },
    {
      icon: "https://res.cloudinary.com/dwbno71qd/image/upload/v1653254028/Realmod/parking-area_1_nmpkt0.png",
      description: "Parking Space"
    },
    {
      icon: "https://res.cloudinary.com/dwbno71qd/image/upload/v1653254028/Realmod/parking-area_1_nmpkt0.png",
      description: "Parking Space"
    },
    {
      icon: "https://res.cloudinary.com/dwbno71qd/image/upload/v1653254028/Realmod/parking-area_1_nmpkt0.png",
      description: "Parking Space"
    },
    {
      icon: "https://res.cloudinary.com/dwbno71qd/image/upload/v1653254028/Realmod/parking-area_1_nmpkt0.png",
      description: "Parking Space"
    }
  ]
  return (
    <section className="section-container">
      <div class="contenedor">
        <img src="https://res.cloudinary.com/dwbno71qd/image/upload/v1653440992/Realmod/Our_Agents_ixzutp_1_fmjbpi.png" />
        <div class="centrado">
          <span>Properties</span>
          <p>Featured Listings</p>

        </div>
      </div>
      <div className='containerListings'>
        {data.map((item) => (
          <div className='parentCard'>
            <Card sx={{ width: 307 }} >
              <CardContent className="FeaturedCard" >
                <div className='contentIcon'>
                  <img src={item.icon} />
                </div>
                <div className='featuredText'>
                  <span>{item.description}</span>
                </div>
              </CardContent>
            </Card>
            <span className='circleIconArrow'> <img src="https://res.cloudinary.com/dwbno71qd/image/upload/v1653441020/Realmod/flecha_rrqfo2_egdrgm.png" /></span>
          </div>
        ))}

      </div>

    </section>
  )
}

export default FeaturedCards