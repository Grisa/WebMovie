const Movie = require("../Models/MovieModel");

module.exports = {
	async getAllMovies(req, res) {

		const movie = await Movie.find();

		if (movie.length > 0) {
			return res.status(200).json( {data: movie} );
		}
		
		return res.status(404).send("Nao existem filmes");
	},

	async getMovieByName(req, res) {

		const movie = await Movie.find({name: req.body.name});

		if (movie.length > 0) {
			return res.status(200).json( {data: movie} );
		}
		
		return res.status(404).send("Nao existem filme com o nome: "+req.body.name);
	},

	async getMovieByGenre(req, res) {
		const movies = await Movie.find({ genre: req.body.genre });

		if (movies.length > 0) {
			return res.status(200).json({ data: movies });
		}

		return res.status(404).send("Nao existem filmes deste genero");
	},

	async getMoviesList(req, res) {
		const movies = await Movie.find({type: "1"});

		if (movies.length > 0) {
			return res.status(200).json( {data: movies} );
		}
		return res.status(404).send("Nao existem filmes");
	},

	async getAnimeList(req, res) {
		const animes = await Movie.find( {"type": "2"} );

		if (animes.length > 0) {
			return res.status(200).json( {data: animes} );
		}

		return res.status(404).send("Nao existem Animes");
	},

	async getSerieList(req, res) {
		const series = await Movie.find( {"type": "3"} );
		if (series.length > 0) {
			return res.status(200).json( {data: series} );
		}
		return res.status(404).send("Nao existem Series");
	},

	async getMoviesListFilter(req, res) {
		const movies = await Movie.find({type: "1", name: req.body.name});

		if (movies.length > 0) {
			return res.status(200).json( {data: movies} );
		}
		return res.status(404).send("Nao existem filmes");
	},

	async getAnimeListFilter(req, res) {
		const animes = await Movie.find( {"type": "2", name: req.body.name} );

		if (animes.length > 0) {
			return res.status(200).json( {data: animes} );
		}

		return res.status(404).send("Nao existem Animes");
	},

	async getSerieListFilter(req, res) {
		const series = await Movie.find( {"type": "3", name: req.body.name} );
		if (series.length > 0) {
			return res.status(200).json( {data: series} );
		}
		return res.status(404).send("Nao existem Series");
	}

}