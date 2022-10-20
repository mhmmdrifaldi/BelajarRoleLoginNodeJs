import bcrypt from 'bcrypt'

const login = async (req,res)=>{
	const user = await req.context.models.users.findOne({
		where: {email : req.body.email}
	})
	if(!user) return res.status(404).send({msg: "User tidak ditemukan"})
	const compare  = await bcrypt.compare(req.body.password, user.password)
	if(!compare) return res.status(404).send({msg: "Wrong Password"})
	req.session.userId = user.user_id
	const user_id = user.user_id
	const name = user.name
	const email = user.email
	const role = user.role
	res.send({user_id, name, email, role})
}

const me = async (req,res)=>{
	if(!req.session.userId) {
		return res.status(404).send({msg: "Mohon login ke akun Anda!"})
	}
	const user = await req.context.models.users.findOne({
		attributes: ['user_id', 'name', 'email', 'role'],
		where: {user_id : req.session.userId}
	})
	if(!user) return res.status(404).send({msg: "User tidak ditemukan"})
	res.send(user)
}

const logout = (req,res)=>{
	req.session.destroy((err)=>{
		if(err) return res.status(404).send({msg: "Tidak dapat Logout"})
		res.send({msg: "Anda telah Logout"})
	})
}

export default {
	login,
	me,
	logout
}