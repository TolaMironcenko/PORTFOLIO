const host = 'http://127.0.0.1:8000'
const prefix = 'api'

const routes =  {
	reviews: () => [host, prefix, 'reviews', ''].join('/')
}

export default routes