import React from 'react'
import './style.css'


const useful = ['Programs' , 'Events' , 'News' , 'Donate']
const quick = ['About us', 'Contact us', 'FAQs', 'Policies' ]

function Footer() {
  return (
    <div className='Footer'>
        <div className='fotter-head'>
        <img src='/headerlogo.jpg' alt="logo" />
        <div className='subscribe'>
            <p>Get the latest on our programs and events</p>
            <button>Subscribe</button>
        </div>
        </div>

    <div className='footer-details-box'>
        <div className='useful-links'>
            <h5>Useful Links</h5>
            {useful.map(each => (
                <div>
                    <p>{each}</p>
                </div>
            ))}
        </div>
        <div className='quick-links'>
            <h5>Quick Links</h5>
            {quick.map(each => (
                <div> 
                    <p>{each}</p>
                </div>
            ))}
        </div>
        <div>
        <div className='info-box'>
            <div className='statements'>
                <h5>Mission Statement</h5>
                <p>Our mission at Woman to Woman Mentoring, Inc. is to cultivate mentoring relationships
            that provide women with guidance, support and community connections.</p>
            </div>
            <div className='address'>
                <h5>Contact INFO</h5>
                <p>22 South Market Street
                Suite 321
                Frederick, MD 21701
                </p>
                <p>123456789</p>
                <p>Rcbbkjn@gmail.com</p>
            </div>
        </div>
        <hr style={{backgroundColor:'#BB4774' , height:'2px'}} />
        <p>© 2022  Woman To Woman Mentoring, Inc.</p>
        </div>
    </div>


    </div>
  )
}

export default Footer