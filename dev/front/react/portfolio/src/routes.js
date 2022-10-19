const host = 'http://172.20.10.2:8000'
const prefix = 'api'

const routes =  {
	reviews: () => [host, prefix, 'reviews', ''].join('/'),
	examples: () => [host, prefix, 'examples', ''].join('/'),
}

export default routes