const host = 'http://127.0.0.1:8000/'
const prefix = 'api'

const routes =  {
	reviews: () => [host, prefix, 'reviews', ''].join('/'),
	examples: () => [host, prefix, 'examples', ''].join('/'),
}

export default routes
