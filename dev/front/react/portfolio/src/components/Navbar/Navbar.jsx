import React from 'react'
import Navlink from '../Navlink'
import './Navbar.css'
import Avatar from '../Avatar/Avatar'

const Navbar = () => {
	return(
		<div className='navbar'>
			<Avatar image={require('../../imgs/myPhoto.png')}/>
			<div className='links'>
				<Navlink to='/'>Главная</Navlink>
				<Navlink to='/examples'>Примеры работ</Navlink>
				<Navlink to='/reviews'>Отзывы обо мне</Navlink>
			</div>
		</div>
	)
}

export default Navbar