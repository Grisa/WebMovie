const Movie = require("../Models/MovieModel");

module.exports = {

	async createMovie(req, res) {
		const { name } = req.body;

		const movie = await Movie.findOne({ name });

		if (movie !== null) {
			return res.status(404).send("Filme ja existe");
		}

		await Movie.create(req.body, function (err, small) {
			return res.status(200).send('ok');
		});
	},

	async updateMovie(req, res) {
		const {name, update} = req.body;

		const obj = await Movie.updateOne({ name }, { $set:update });

		if (obj.nModified == 0) {
			return res.status(404).send("Filme não existe");
		}

		return res.status(200).json({data: obj});
	},

	async deleteMovie(req, res) {
		const { name } = req.body;

		const movie = await Movie.find();

		if (movie === null) {
			return res.status(404).send("Filme não existente");
		}

		const data = await Movie.deleteOne({name});

		return res.status(200).send('ok');
	},

	async favoriteMovie(req, res) {

		const {name, user, type} = req.body;

		var handleArray = [];
		handleArray[user] = type;

		const obj = await Movie.updateOne({ name }, { $set:{favorite: [{user: user,type: type}]} });

		if (obj.nModified == 0) {
			return res.status(404).send("erro ao dar favorito");
		}

		return res.status(200).send('ok');

	}
}