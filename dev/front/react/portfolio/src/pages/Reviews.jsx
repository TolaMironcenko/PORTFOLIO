import React from 'react'
import '../css/Reviews.css'
import FeedbackCard from '../components/FeedbackCard/FeedbackCard'

const Reviews = () => {
	return(
		<div className='reviews'>
			<div className='reviewshead'>
				<h1 className='reviewsh1'>Отзывы:</h1>
				<button className='plusbtn'>Добавить отзыв</button>
			</div>
			<div className='allreviews'>
				<FeedbackCard name='Анатолий Миронченко' date={'01.01.2001'}>FeedbackCard FeedbackCardFeedbackCard FeedbackCardcardtextcardtextcard textcardtextcardtext</FeedbackCard>
				<FeedbackCard name='Анатолий Миронченко' date={'01.01.2001'}>FeedbackCard FeedbackCardFeedbackCard FeedbackCardcardtextcardtextcard textcardtextcardtext</FeedbackCard>
				<FeedbackCard name='Анатолий Миронченко' date={'01.01.2001'}>FeedbackCard FeedbackCardFeedbackCard FeedbackCardcardtextcardtextcard textcardtextcardtext</FeedbackCard>
				<FeedbackCard name='Анатолий Миронченко' date={'01.01.2001'}>FeedbackCard FeedbackCardFeedbackCard FeedbackCardcardtextcardtextcard textcardtextcardtext</FeedbackCard>
				<FeedbackCard name='Анатолий Миронченко' date={'01.01.2001'}>FeedbackCard FeedbackCardFeedbackCard FeedbackCardcardtextcardtextcard textcardtextcardtext</FeedbackCard>
				<FeedbackCard name='Анатолий Миронченко' date={'01.01.2001'}>FeedbackCard FeedbackCardFeedbackCard FeedbackCardcardtextcardtextcard textcardtextcardtext</FeedbackCard>
				<FeedbackCard name='Анатолий Миронченко' date={'01.01.2001'}>FeedbackCard FeedbackCardFeedbackCard FeedbackCardcardtextcardtextcard textcardtextcardtext</FeedbackCard>
				<FeedbackCard name='Анатолий Миронченко' date={'01.01.2001'}>FeedbackCard FeedbackCardFeedbackCard FeedbackCardcardtextcardtextcard textcardtextcardtext</FeedbackCard>
			</div>
		</div>
	)
}

export default Reviews