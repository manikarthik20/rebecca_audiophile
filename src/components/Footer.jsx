import React from 'react'
import '../components/Footer.css'
import img1 from '../images/rebeccalo.png'

function Footer() {
  return (
    <div className='container footermain'>
      <div className='row'>
        <div className='col-12'>
          <p>Eaxmple of a persons that shows the six main documents you should include Name, age, gender, tag line,experience and skills are placed on the left-hand side. The middle column focuses on the context
            to indicate how they would interact with a product or service finally,on the right-hand side some goal's ad concerns are shared, as well as a short scenario to indicate the personal's attitude.
          </p>
        </div>
      
        <div className="col rebeccalogos">
          <img src={img1} alt="rebeccalogo" className='rebeccaImg' />
          <span className='rebeccacontent'><strong> Rebecca | INTIRACTING-DESIGN.ORG</strong></span>
        </div>
        </div>
    </div>
  )
}

export default Footer
