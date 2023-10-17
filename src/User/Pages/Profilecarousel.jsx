import React from 'react'
import Slider from 'react-slick';
import './style.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Card, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';



const data = [
  {
    info : 'Definitely wouldn’t be here without W2WM, Inc! — feeling extremely thankful for the program and relieved that all the hard work is paying off!',
    profile : '/profile.png',
    sname :'L.p',
    name: 'Mentee'
  },
  {
    info : 'Definitely wouldn’t be here without W2WM, Inc! — feeling extremely thankful for the program and relieved that all the hard work is paying off',
    profile : '/profile.png',
    sname :'L.p',
    name: 'Mentee'
    },
  {
    info : 'Definitely wouldn’t be here without W2WM, Inc! — feeling extremely thankful for the program and relieved that all the hard work is paying off',
    profile : '/profile.png',
    sname :'L.p',
    name: 'Mentee'
  },
  {
    info : 'Definitely wouldn’t be here without W2WM, Inc! — feeling extremely thankful for the program and relieved that all the hard work is paying off',
    profile : '/profile.png',
    sname :'L.p',
    name: 'Mentee'
  }
]


const Profilecarousel = () => {

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className='sl'>
        <h2> Testimonials</h2>
        <Typography variant='body1' sx={{mb:5 , color:'white'}}>Here’s what our mentees have to say about our programs and events and how they transformed their lives</Typography>
        <Slider {...settings} >
          {data.map(each => (
             <Card sx={{ maxWidth: 250, position: "relative",mr : 4,padding: '25px 15px', backgroundColor:'#1F3A8B' , borderRadius: 5 }}>
             <Box sx={{ position: 'relative'}}>
                 <Typography sx={{mb: '7rem' ,color:'white'}} variant = 'body2' >Definitely wouldn’t be here without W2WM, Inc! — feeling extremely thankful for
                   the program and relieved that all the hard work is paying off!</Typography>
                   <div className='card-profile'>
                   <img src='/profile.png' style={{height:'40px' , marginLeft: '10px' , marginRight:'10px'}} alt='profile' />
                  <Typography variant='subtitle2'>{each.name}</Typography>
                   </div>
             </Box>
 
         </Card>
          ))}
        </Slider>
      </div>
    );
  }

  
export default Profilecarousel

