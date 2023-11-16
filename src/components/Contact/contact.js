import React from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Microsoft from '../../assets/microsoft.png'
import Adobe from '../../assets/adobe.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import Twiiter from '../../assets/twitter.png'
import Youtube from '../../assets/youtube.png'
import Instagram from '../../assets/instagram.png'
const contact = () => {
  return (
	
	  <section id="contactPage">
		<div id='clients'>
          <h1 className='contactPageTitle'>My clients</h1>
        <p className='clientDesc'>
			I have had the opportunity tlo work with a diverse group of companies.Some of the notable companiesI have worked with includes
		</p>
		<div className='clientImgs'>
			<img src={Walmart} className='clientImg'/>
			<img src={Adobe} className='clientImg'/>
			<img src={Microsoft} className='clientImg'/>
			<img src={Facebook} className='clientImg'/>
		</div>
		</div>
		<div id ='contact'>
           <h1 className='contactPageTitle'>Contact</h1>
		   <span className='contactDesc'>Please fill the information to discuss any work opportunities</span>
		   <form className='contactForm'>
			<input type='text' className='name' placeholder='Your Name'/>
			<input type='email' className='email' placeholder='Your Email'/>
			
			<textarea  className='msg' name="message" rows="5"  columns="30" placeholder="Your message">Msg</textarea>
			<button  type="submit" className='submitBtn'>Submit</button>
			<div className='links'>
				<img src={FacebookIcon} alt='facebook' className='link'/>
				<img src={Twiiter} alt="youtube" className='link'/>
				<img src={Youtube} alt="youtube" className='link'/>
				<img src={Instagram} alt="instagram" className='link'/>
			</div>
			</form>	
		</div>
	  </section>
	
  )
}

export default contact
