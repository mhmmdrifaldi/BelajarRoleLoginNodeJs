const verifyUser = async (req,res,next)=>{
	if(!req.session.userId){
		return res.status(404).send({msg: "Mohon login ke akun Anda!"})
	}
	const user = await req.context.models.users.findOne({
		where: {user_id: req.session.userId}
	})
	if(!user) return res.status(404).send({msg: "User tidak ditemukan"})
	req.userId = user.id
	req.role = user.role
	next()
}

const adminOnly = async (req,res,next)=>{
	const user = await req.context.models.users.findOne({
		where: {user_id: req.session.userId}
	})
	if(!user) return res.status(404).send({msg: "User tidak ditemukan"})
	if(user.role !== "admin") return res.status(404).send({msg: "Akses Terlarang"})
	next()
}

export default {
	verifyUser,
	adminOnly
}