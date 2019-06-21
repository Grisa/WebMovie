const User = require("../Models/UserModel");

module.exports = {
	async authenticate(req, res) {
		try {
			const { password, login } = req.body;
			const user = await User.findOne({ login });

			if (!user) {
				return res.status(400).json({ error: "Usuario nao existe" });
			}

			if (!(await user.compareHash(password))) {
				return res.status(400).json({ error: "Usuario ou senha incorretos" });
			}

			return res.status(200).json({
				user,
				token: user.generateToken()
			});
		} catch (e) {
			return res.status(400).json({ error: "Ocorreu um erro" });
		}
	},

	async createUser(req, res) {
		const { login } = req.body;

		try {
			if (await User.findOne({ login })) {
				return res.status(400).json({ error: "Usuario ja existe" });
			}

			const user = await User.create(req.body);

			return res.json({ user });
		} catch (err) {
			return res.status(400).json({ error: "Erro no cadastro" });
		}
	}
}