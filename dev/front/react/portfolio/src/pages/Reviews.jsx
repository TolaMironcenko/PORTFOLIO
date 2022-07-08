import React, { useState, useEffect } from 'react'
import '../css/Reviews.css'
import FeedbackCard from '../components/FeedbackCard/FeedbackCard'
import routes from '../routes.js'
import { timeToTime } from '../reviewsLogic.js'

const Reviews = () => {

	const [allreviews, setAllreviews] = useState([])

	useEffect(() => {
		fetch(routes.reviews(), {
			mode: 'cors'
		}).then(res => res.json()) // обработка ответа сервера
      	.then(
        	(result) => {
          		console.log(result)
          		setAllreviews(result)
          		console.log(allreviews)
        	},)
      	// eslint-disable-next-line
	}, [])

	return(
		<div className='reviews'>
			<div className='reviewshead'>
				<h1 className='reviewsh1'>Отзывы:</h1>
				<button className='plusbtn'>Добавить отзыв</button>
			</div>
			<div className='allreviews'>
				{
					allreviews.map((review) => {
						return(

								review.is_active
								?<FeedbackCard
									name={review.name}
									key={review.id}
									id={review.id}
									date={timeToTime(review.date)}
								>{review.text}</FeedbackCard>
								:<></>

						)
					})
				}
				{/*<FeedbackCard name='Анатолий Миронченко' date={'01.01.2001'}>FeedbackCard FeedbackCardFeedbackCard FeedbackCardcardtextcardtextcard textcardtextcardtext</FeedbackCard>
				<FeedbackCard name='Анатолий Миронченко' date={'01.01.2001'}>FeedbackCard FeedbackCardFeedbackCard FeedbackCardcardtextcardtextcard textcardtextcardtext</FeedbackCard>
				<FeedbackCard name='Анатолий Миронченко' date={'01.01.2001'}>FeedbackCard FeedbackCardFeedbackCard FeedbackCardcardtextcardtextcard textcardtextcardtext</FeedbackCard>
				<FeedbackCard name='Анатолий Миронченко' date={'01.01.2001'}>FeedbackCard FeedbackCardFeedbackCard FeedbackCardcardtextcardtextcard textcardtextcardtext</FeedbackCard>
				<FeedbackCard name='Анатолий Миронченко' date={'01.01.2001'}>FeedbackCard FeedbackCardFeedbackCard FeedbackCardcardtextcardtextcard textcardtextcardtext</FeedbackCard>
				<FeedbackCard name='Анатолий Миронченко' date={'01.01.2001'}>FeedbackCard FeedbackCardFeedbackCard FeedbackCardcardtextcardtextcard textcardtextcardtext</FeedbackCard>
				<FeedbackCard name='Анатолий Миронченко' date={'01.01.2001'}>FeedbackCard FeedbackCardFeedbackCard FeedbackCardcardtextcardtextcard textcardtextcardtext</FeedbackCard>
				<FeedbackCard name='Анатолий Миронченко' date={'01.01.2001'}>FeedbackCard FeedbackCardFeedbackCard FeedbackCardcardtextcardtextcard textcardtextcardtext</FeedbackCard>*/}
			</div>
		</div>
	)
}

export default Reviews