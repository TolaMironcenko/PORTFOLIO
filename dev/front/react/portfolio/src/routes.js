const host = 'http://83.172.39.220:54321'
const prefix = 'api'

const routes =  {
	reviews: () => [host, prefix, 'reviews', ''].join('/'),
	examples: () => [host, prefix, 'examples', ''].join('/'),
}

export default routes
