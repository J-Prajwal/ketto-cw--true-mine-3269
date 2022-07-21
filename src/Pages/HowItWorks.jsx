import React from 'react'
import Carousel from './Carousel'
import styles from "../styles/HowWorks.modules.css"


// import Carousel from './Carousal';


const HowItWorks = () => {
  return (
    <div>
      <h1 className='sam'>Raising Funds was never this easy. Start a fundraiser in 5 minutes!</h1>
    <div className='cr'> <Carousel/> </div>
    <div className='cf'>
      <div><img className='bird' src="https://ketto.gumlet.io/assets/images/how-it-works/ketto-logo.svg?w=480&dpr=1.0" ></img></div>
      <h2 className='fon'>We know you are in urgent need of funds.</h2>
      <p className='ourp'>Our personal fundraiser expert is waiting to get you started!</p>

      <form action="/action_page.php">
  <div className="input-container">
    <i className="fa fa-user icon">
    
    </i>
    <input className="input-field" type="text" placeholder="Name" name="usrnm"/>
    <img className='usericon' src="https://cdn-icons-png.flaticon.com/128/847/847969.png"/></div>

  <div className="input-container">
    <i className="fa fa-envelope icon"></i>
    <input className="input-field" type="text" placeholder="Your Mobile Number" name="Mobile"/>
  </div>
  <div className="input-container2">
   
    <input className="input-field" type="text" placeholder="What will be the funds used for?" name="Mobile"/>
  </div>
  <p className='para2'>102 People started a fundraiser in last 2 days</p>
<div><button className='btn1'>GET A CALL</button></div>
  <a href="#" className="whatsaap-btn">
          <i className="fa fa-twitter fa-fw"></i>CONNECT ON WHATSAPP
        </a>
</form>

<div className='sd1'>
  <div className='b1'> <h1 className='teal'>55 Lakh+</h1> 
  <p className='para-g'>DONORS</p></div>
   <div className='m1'></div>
  <div className='b2'> <h1 className='teal'>2 Lakh+</h1> 
  <p className='para-g'>FUNDRAISERS</p></div>
  <div className='m2'></div>
  <div className='b3'> <h1 className='teal'>0%</h1> 
  <p className='para-g'>PLATFORM FEE</p></div>
  
  
 </div>

</div>






    
    </div>
  )
}

export default HowItWorks


