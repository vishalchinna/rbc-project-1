import React from 'react'

const invetmentOption = [
    {
      icon : '/landsale.png',
      heading : 'Real Estate',
      information : 'Assisting women who desire personal and professional guidance to help them move forward by providing a supportive environment for goal planning, skill building, and personal development. '
    },
    {
      icon : '/landsale.png',
      heading : 'Land',
      information : 'Assisting women who desire personal and professional guidance to help them move forward by providing a supportive environment for goal planning, skill building, and personal development. '
    },
    {
      icon : '/hospital.png',
      heading : 'Hospitality',
      information : 'Assisting women who desire personal and professional guidance to help them move forward by providing a supportive environment for goal planning, skill building, and personal development. '
    },
    {
      icon : '/landsale.png',
      heading : 'Import & Export',
      information : 'Assisting women who desire personal and professional guidance to help them move forward by providing a supportive environment for goal planning, skill building, and personal development. '
    },
    {
      icon : '/landsale.png',
      heading : 'Aqua culture',
      information : 'Assisting women who desire personal and professional guidance to help them move forward by providing a supportive environment for goal planning, skill building, and personal development. '
    },
    {
      icon : '/landsale.png',
      heading : 'Ecommerce',
      information : 'Assisting women who desire personal and professional guidance to help them move forward by providing a supportive environment for goal planning, skill building, and personal development. '
    }
  ]
  

function Investplans() {
  return (
    <div>
              <h3>WE ARE iNVESTING FALLOWING INDUSTRIES </h3>

                <p>Grow your mindset and level up with our mentorship programs</p>

         <ul>
    {invetmentOption.map(each => (
      <li>
          <img src={each.icon} alt="icon" />
          <div className='list-box'>
            <h3>{each.heading}</h3>
            <p style={{fontSize:'12px'}}>{each.information}</p>
          </div>
      </li>
    ))}
  </ul>
  <p>Many more Industries we will invest</p>
    </div>
  )
}

export default Investplans