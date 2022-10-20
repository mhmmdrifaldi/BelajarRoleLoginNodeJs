import bcrypt from 'bcrypt'
const SALT_ROUND = 10

const getUsers = async (req,res)=>{
	try {
		const user = await req.context.models.users.findAll({
			attributes: ['user_id', 'name', 'email', 'role']
		})
		return res.send(user)
	} catch (error) {
		return res.status(404).send({msg: error.message})
	}
}

const getUserById = async (req,res)=>{
	try {
		const user = await req.context.models.users.findOne({
			attributes: ['user_id', 'name', 'email', 'role'],
			where: {user_id : req.params.id}
		})
		return res.send(user)
	} catch (error) {
		return res.status(404).send({msg: error.message})
	}
}

const createUser = async (req,res)=>{
	const {name, email, password, confpassword, role} = req.body
		if(password !== confpassword) return res.status(404).send({msg: "Password dan Confirm Password Tidak Cocok"})
		let hasPassword = password
    hasPassword = await bcrypt.hash(hasPassword,SALT_ROUND)
	try {
		await req.context.models.users.create({
			name : name,
			email: email,
			password: hasPassword,
			role: role
		})
		return res.send({msg: "Register Berhasil"})
	} catch (error) {
		return res.status(404).send({msg: error.message})
	}
}

const updateUser = async (req,res)=>{
	const user = await req.context.models.users.findOne({
		where: {user_id : req.params.id}
	})
	if(!user) return res.status(404).send({msg: "User tidak ditemukan"})
	const {name, email, password, confpassword, role} = req.body
	let hasPassword = password
	if(password === "" || password === null){
		hasPassword = user.password
	} else {
		hasPassword = await bcrypt.hash(hasPassword,SALT_ROUND)
	}
	if(password !== confpassword) return res.status(404).send({msg: "Password dan Confirm Password Tidak Cocok"})
	try {
		await req.context.models.users.update({
			name : name,
			email: email,
			password: hasPassword,
			role: role
		},{ returning : true , where:{user_id : req.params.id}})
		return res.send({msg: "Update Berhasil"})
	} catch (error) {
		return res.status(404).send(error)
	}
}

const deleteUser = async (req,res)=>{
	const user = await req.context.models.users.findOne({
		where: {user_id : req.params.id}
	})
	if(!user) return res.status(404).send({msg: "User tidak ditemukan"})
	try {
		await req.context.models.users.destroy({
			where:{id : user.id}
		})
		return res.send({msg: "User Deleted"})
	} catch (error) {
		return res.status(404).send(error)
	}
}

export default {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser
}