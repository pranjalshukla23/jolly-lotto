import axios from './axios'

//export const getAllProducts = async () => {
//	const res = await axios.get('/lotteries')
//	return res.data
//}
export const getAllProducts = () => {
	return axios.get('/lotteries').then(res => res.data)
}

export const getSingleProducts = () => {
	// return single type products here.
}

export const getProductByID = id => {
	// @todo: do we make this call everytime or cache all prods once and then get it from there?
	return axios.get(`/lotteries/${id}`).then(res => res.data)
}

export const getLotteryResults = async id => {
	const resp = await axios.get(`/lotteries/${id}/results`)
	return resp.data
}
