import React from 'react'
import Profilecarousel from './Profilecarousel'
import './style.css'


function Home() {
  return (
    <div className='bg-container'>    
      <div className='home-container'>
            <div className='intro-information'>
                <h5>GROW WITHOUT LIMITS</h5>
                <h2>Join a community of women helping each other <span>grow</span>.</h2>
                <p>Make connections, take action and move forward with a community of women dedicated to mutual growth</p>
                <button className='learn-more' type='button'>LEARN MORE</button>
            </div>
            <img src='/intro.jpg' className='intro-icon' alt='intro-icon'/>
      </div>


      <h4 style={{fontFamily:'MuseoModerno',opacity:'0.5' , textAlign:'center' , fontSize:'19px'}}>Welcome to the future of Retanya Business club LLp</h4>
      <img  src='/Humanresources.jpg'  className='human-resource-pic' alt='human-resource'/>
    
     <p>Discover how Woman to Woman Mentoring helps women move beyond limits by connecting them with mentors, community and possibilities.</p>

    </div>

  )
}


export default Home