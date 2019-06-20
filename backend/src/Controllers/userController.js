const User = require("../Models/UserModel");
const crypto = require('crypto')

module.exports = {

	async validUser(req, res) {
		
		const {password, login} = req.body;

		var hash = crypto.createHash('md5').update(password).digest("hex");

		const cur = await User.findOne({login: login});

		if (cur === null) {
			return res.status(501).send("Usuario nao existe");
		}

		if (cur.login === login && cur.password === hash) {
			return res.status(200).send('ok');
		} else {
			return res.status(502).send("Usuario ou senha incorretos");
		}

		return res.status(200).send('ok');
	},

	async createUser(req, res) {

		const {name, password, email, login, idade, sobrenome} = req.body;

		const cur = await User.findOne({login: login});

		var hash = crypto.createHash('md5').update(password).digest("hex");

		if (cur !== null && cur.login === login) {
			return res.status(500).send("Usuario ja existe");
		}
	
		User.create({ name: name, password: hash, email: email, login: login, idade: idade, sobrenome: sobrenome}, function (err, small) {
			if (err) return handleError(err);
		 	return res.status(200).send('ok');
		});

		return res.status(200).send('ok');
	}
}