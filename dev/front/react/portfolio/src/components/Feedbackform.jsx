import React from 'react'
import '../css/Feedbackform.css'

const Feedbackform = ({
	activeFeedbackform, 
	setActiveFeedbackform,
	newReview,
	setNewReview,
	allreviews,
	setAllreviews,
	sentReview
}) => {
	return(
		<div 
			className={activeFeedbackform?'feedbackformback active':'feedbackformback'}
			onClick={()=>{setActiveFeedbackform(false)}}
		>
			<div 
				className={activeFeedbackform?'feedbackform active':'feedbackform'}
				onClick={(e) => e.stopPropagation()}
			>
				Имя Фамилия
				<input 
					className='feedbackforminput'
					type='text'
					placeholder='Иван Иванов'
					value={newReview.name}
					id='feedbackforminput'
					onChange={(e)=>{setNewReview({...newReview, name: e.target.value})}}
				/>
				Отзыв
				<textarea 
					placeholder='Ваш отзыв'
					className='feedbackformtextarea'
					id='feedbackformtextarea'
					value={newReview.text}
					onChange={(e)=>{setNewReview({...newReview, text: e.target.value})}}
				/>
				<button 
					className='feedbackformbutton' 
					type='button'
					onClick={()=>{sentReview(newReview)}}
				>Отправить отзыв</button>
			</div>
		</div>
	)
}

export default Feedbackform