import React from 'react'
import '../../css/FeedbackCard.css'
import Avatar from '../Avatar/Avatar'

const FeedbackCard = ({ name, children, date }) => {
	return(
		<div className='feedbackcard'>
			<div className='cardhead'>
				<Avatar style={{margin: '0'}}/>
				<h3 className='cardname'>{name}</h3>
				<span className='date'>{date}</span>
			</div>
			<p className='cardtext'>{children}</p>
		</div>
	)
}

export default FeedbackCard