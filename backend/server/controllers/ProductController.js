const findAll = async (req,res)=>{
	try {
		const product = await req.context.models.products.findAll()
		return res.send(product)
	} catch (error) {
		return res.status(404).send({msg: error.message})
	}
}

export default {
	findAll
}