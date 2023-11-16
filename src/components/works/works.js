import React from 'react'
import './works.css'
import Portfolio1 from "../../assets/portfolio-1.png"
import Portfolio2 from "../../assets/portfolio-2.png"
import Portfolio3 from "../../assets/portfolio-3.png"
import Portfolio4 from "../../assets/portfolio-4.png"
import Portfolio5 from "../../assets/portfolio-5.png"
import Portfolio6 from "../../assets/portfolio-6.png"
const works = () => {
  return (
	
	  <section id='works'>
		<h2 className='worksTitle'>My Portfolio</h2>
		<span className='worksDesc'>I take pride in paying attention to minute details of my project</span>
		<div className='worksImg'>
			<img src={Portfolio1} alt='portfolio1' className='worksImg'/>
			<img src={Portfolio2} alt='2' className='worksImg'/>
			<img src={Portfolio3} alt='3' className='worksImg'/>
			<img src={Portfolio4} alt='4' className='worksImg'/>
			<img src={Portfolio5} alt='5' className='worksImg'/>
			<img src={Portfolio6} alt='6' className='worksImg'/>
		</div>
		<button className='workBtn'>See more</button>
	  </section>
	 
	
  )
}

export default works
