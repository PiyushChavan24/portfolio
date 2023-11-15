import React from 'react'
import'./skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
const skills = () => {
  return (
	<div className='skills'>
<section id='skills'>
	<span className='skillTitle'>
		What I do
	</span>
	<span className='skillDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.</span>
    <div className='skillBars'>
		<div className='skillBar'>
			<img src={UIDesign} alt='UIDesign'className='skillBarImg'/>
			<div className='skillBarText'>
				<h2>UI/UX Design</h2>
				<p> This is a demo text htet can be changed during the production ready website</p>
			</div>
		</div>
		<div className='skillBar'>
			<img src={WebDesign} alt=''className='skillBarImg'/>
			<div className='skillBarText'>
				<h2> Web Design</h2>
				<p>This is a demo text htet can be changed during the production ready website</p>
			</div>
		</div>
		<div className='skillBar'>
			<img src={AppDesign} className='skillBarImg'/>
			<div className='skillBarText'>
				<h2>App Design</h2>
				<p>This is a demo text htet can be changed during the production ready website</p>
			</div>
		</div>
	</div>
  </section>
  </div>
  )
}

export default	skills
