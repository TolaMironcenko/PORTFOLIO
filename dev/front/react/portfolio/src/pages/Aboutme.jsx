import React from 'react'
import '../css/aboutme.css'
import '../imgs/myPhoto.png'

const Aboutme = () => {
	return(
		<div className='aboutme'>
			<h1 className='mainh1'>Привет меня зовут Анатолий Миронченко.<br/> Я занимаюсь веб разработкой.</h1>
			<p className='mainp'>
				Ниже моя фотография и мои навыки.<br/> 
				На странице "примеры работ" примеры того что 
				я могу реализовать или же когда то реализовывал.<br/>
				На странице "отзывы обо мне" находятся отзывы людей о моей работе.
			</p>
			<div className='info'>
				<div className='my_photo'>
					<img src={require('../imgs/myPhoto.png')} alt='моя фотография'/>
				</div>
				<div className='skills'>
					<div className='skillscolumn'>
						<ul className='table'>
							<h5>Языки:</h5>
							<li className='tableli'>Python</li>
							<li className='tableli'>HTML</li>
							<li className='tableli'>css</li>
							<li className='tableli'>scss</li>
							<li className='tableli'>javaScript</li>
						</ul>
						<ul className='table'>
							<h5>Фреймворки и препроцессоры:</h5>
							<li className='tableli'>Reactjs</li>
							<li className='tableli'>SAAS</li>
							<li className='tableli'>Electronjs</li>
							<li className='tableli'>Django</li>
							<li className='tableli'>Flask</li>
						</ul>
					</div>
					<div className='skillscolumn'>
						<ul className='table'>
							<h5>Devops и production технологии:</h5>
							<li className='tableli'>Docker</li>
							<li className='tableli'>Docker-compose</li>
							<li className='tableli'>Nginx</li>
							<li className='tableli'>Uvicorn</li>
						</ul>
						<ul className='table'>
							<h5>Системы контроля версий:</h5>
							<li className='tableli'>git</li>
							<li className='tableli'>gitea</li>
							<li className='tableli'>github</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Aboutme