import React from 'react'
import'./skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
const skills = () => {
  return (
<section id='skills'>
	<span className='skillTitle'>
		What I do
	</span>
	<span className='skillDesc'>i am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.</span>
    <div className='skillBars'>
		<div className='skillBars'>
			<img src={UIDesign} alt='UIDesign'className='skillBarImg'/>
			<div className='skillBarText'>
				<h2></h2>
				<p></p>
			</div>
		</div>
		<div className='skillBars'>
			<img src={WebDesign} alt=''className='skillBarImg'/>
			<div className='skillBarText'>
				<h2></h2>
				<p></p>
			</div>
		</div>
		<div className='skillBars'>
			<img src={AppDesign} className='skillBarImg'/>
			<div className='skillBarText'>
				<h2></h2>
				<p></p>
			</div>
		</div>
	</div>
  </section>
  )
}

export default	skills
