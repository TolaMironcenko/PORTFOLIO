import React from 'react'
import '../css/Navlink.css'

const Navlink = ({ to, children, ...props}) => {
	return(
		<a {...props} className='navlink' href={to}>{children}</a>
	)
}

export default Navlink