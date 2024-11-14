import React from 'react'
import { Canvas } from '@react-three/fiber'

// importing data 
import { workExperiences } from '../constants'
import { div } from 'three/webgpu'


const Experience = () => {
  return (
	<section className="c-space my-20">
		<div className="w-full text-white-600">
			<h3 className="head-text">
				My Work Experience
			</h3>

			<div className="work-container">

				{/* Canvas */}
				<div className='work-canvas'>
					<Canvas>

					</Canvas>
				</div>

				{/* Work Content */}
				<div className="work-content">
					<div className="sm:py-10 py-5 sm:px-5 px-2.5">
						{
							workExperiences.map(({id, name, pos, duration, title, icon, animation}) => (
								<div key={ id } className="work-content_container group">
									<div className="flex flex-col h-full justify-start items-center py-2">
										<div className="work-content_logo">
											<img src={ icon } alt="logo" className='w-full h-full'/>
										</div>
										<div className="work-content_bar" />
									</div>

									<div className="sm:p5 px-2.5 py-5">
										<p className="font-bold text-white-800">{ name }</p>
										<p className='text-sm mb-5'>{ pos } -- { duration }</p>
										<p className='group-hover:txt-white transition ease-in-out duration-500'>{ title }</p>
									</div>
								</div>
							))
						}
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Experience