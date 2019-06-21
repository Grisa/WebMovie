const Movie = require("../Models/MovieModel");

module.exports = {

	async createMovie(req, res) {
		console.log(req.body);
		const { name } = req.body;

		const movie = await Movie.findOne({ name });

		if (movie !== null) {
			console.log('aqui')
			return res.status(404).send("Filme ja existe");
		}

		Movie.create(req.body, function (err, small) {
			return res.status(200).send('ok');
		});

		return res.status(200).send('ok');
	},

	async deleteMovie(req, res) {

		const { name } = req.body;

		const movie = await Movie.find();

		if (movie === null) {
			return res.status(404).send("Filme não existente");
		}

		const data = await Movie.deleteMany(null);

		return res.status(200).json({ a: data });
	},

	async getAllMovies(req, res) {

		const movie = await Movie.find();

		console.log(movie);

		if (movie === null || movie.length == 0) {
			return res.status(404).send("Nao existem filmes");
		}

		return res.status(200).send(movie);
	},

	async getMovieByGenre(req, res) {
		const movies = await Movie.find({ type: req.params.type });

		console.log(movies)

		if (movies.length > 0) {
			return res.status(200).send(movies);
		}

		return res.status(404).send("Nao existem filmes deste genero");
	}

}