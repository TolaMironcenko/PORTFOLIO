import React, { useState, useEffect } from 'react'
import '../css/Reviews.css'
import FeedbackCard from '../components/FeedbackCard/FeedbackCard'
import routes from '../routes.js'
import { timeToTime } from '../reviewsLogic.js'
import Feedbackform from '../components/Feedbackform'

const Reviews = () => {

	const [allreviews, setAllreviews] = useState([])
	const [activeFeedbackform, setActiveFeedbackform] = useState(false)
	const [newReview, setNewReview] = useState({name: '', text: ''})

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

	const sentReview = (newReview) => {
		if (newReview.name === '' || newReview.text === '') {
			setActiveFeedbackform(false)
		}else{
			fetch(routes.reviews(), {
				mode: 'cors',
				method: 'POST',
				headers: {
		          'Content-Type': 'application/json' // тип передаваемы данных application/json
		        },
		        body: JSON.stringify(newReview)
			})
			.then(res => res.json()) // обработка ответа сервера
		    .then(
		        (result) => {
		          setAllreviews([...allreviews, result]); // добавление в массив состояния всех событий
		          setNewReview({ name: '', text: '' }) // обнуление всех инпутов 
		          setActiveFeedbackform(false)
		          console.log(allreviews)
		        },)
		}
	}

	return(
		<div className='reviews'>
			<div className='reviewshead'>
				<h1 className='reviewsh1'>Отзывы:</h1>
				<button 
					className='plusbtn'
					onClick={()=>{setActiveFeedbackform(true)}}
				>Добавить отзыв</button>
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
								:<div key={review.id}></div>

						)
					})
				}
			</div>
			<Feedbackform
				activeFeedbackform={activeFeedbackform}
				setActiveFeedbackform={setActiveFeedbackform}
				newReview={newReview}
				setNewReview={setNewReview}
				allreviews={allreviews}
				setAllreviews={setAllreviews}
				sentReview={sentReview}
			/>
		</div>
	)
}

export default Reviews