const User = require("../Models/UserModel");
const crypto = require('crypto')

module.exports = {

	async validUser(req, res) {
		const { password, login } = req.body;
		const hash = crypto.createHash('md5').update(password).digest("hex");
		const user = await User.findOne({login});

		if (user === null) {
			return res.status(404).send("Usuario nao existe");
		}

		if (user.login === login && user.password === hash) {
			return res.status(200).send('ok');
		}

		return res.status(401).send("Usuario ou senha incorretos");
	},

	async createUser(req, res) {
		const { password, login } = req.body;
		const user = await User.findOne({login});
		const hash = crypto.createHash('md5').update(password).digest("hex");

		if (user !== null) {
			return res.status(404).send("Usuario ja existe");
		}

		User.create({...req.body, password: hash}, function (err, small) {
			if (err) return handleError(err);
		 	return res.status(200).send('ok');
		});

		return res.status(200).send('ok');
	}
}