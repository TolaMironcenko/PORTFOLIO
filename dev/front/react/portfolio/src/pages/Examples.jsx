import React, { useEffect, useState } from 'react'
import ExampleCard from '../components/ExampleCard'
import '../css/example.css'
import routes from "../routes"

const Examples = () => {

	const [allExamples, setAllExamples] = useState([])

	useEffect(() => {
		fetch(routes.examples(), {
			mode: 'cors'
		}).then(res => res.json()) // обработка ответа сервера
		.then(
		  (result) => {
				console.log(result)
				if (result!==[]){
					setAllExamples(result)
				}
				console.log(allExamples)
		  },)
		  // eslint-disable-next-line
	}, [])

	return(
		<div className="example">
			<div className="examplecards">
				{
					allExamples.length === 0
					? <h1>Пока что нет примеров.</h1>
					// eslint-disable-next-line
					: allExamples.map((example) => {
						if (example.is_active === true) {
							return(
								<ExampleCard 
									key={example.id} 
									image={example.image} 
									title={example.title} 
									text={example.description}
									link={example.weburl}
								/>
							)
						}
					})
				}
			</div>
		</div>

	)
}

export default Examples
