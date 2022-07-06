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
			</div>
		</div>
	)
}

export default Aboutme