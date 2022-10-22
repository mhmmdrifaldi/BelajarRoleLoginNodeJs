import axios from 'axios'

const list = async()=>{
	try {
		const result = await axios.get(`http://localhost:3001/product`)
		return result.data
	} catch (error) {
		return await error.message
	}
}

export default { list }