import React from 'react'
import '../css/Reviews.css'
import FeedbackCard from '../components/FeedbackCard/FeedbackCard'

const Reviews = () => {
	return(
		<div className='reviews'>
			<h1 className='reviewsh1'>Отзывы:</h1>
			<FeedbackCard name='Анатолий Миронченко' date={'01.01.2001'}>FeedbackCard FeedbackCardFeedbackCard FeedbackCardcardtextcardtextcard textcardtextcardtext</FeedbackCard>
			<FeedbackCard name='Анатолий Миронченко' date={'01.01.2001'}>FeedbackCard FeedbackCardFeedbackCard FeedbackCardcardtextcardtextcard textcardtextcardtext</FeedbackCard>
			<FeedbackCard name='Анатолий Миронченко' date={'01.01.2001'}>FeedbackCard FeedbackCardFeedbackCard FeedbackCardcardtextcardtextcard textcardtextcardtext</FeedbackCard>
			<FeedbackCard name='Анатолий Миронченко' date={'01.01.2001'}>FeedbackCard FeedbackCardFeedbackCard FeedbackCardcardtextcardtextcard textcardtextcardtext</FeedbackCard>
		</div>
	)
}

export default Reviews