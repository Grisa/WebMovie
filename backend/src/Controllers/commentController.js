const Comment = require("../Models/CommentModel");
const Movie = require("../Models/MovieModel");

module.exports = {

	async addComment(req, res) {

		const { name, comment } = req.body;

		try {
			movie = await Movie.findOne({ name })
			if (movie === null) {
				return res.status(400).json({ error: "Filme nao existente" });
			} else {
				movieC = await Comment.findOne({ name })
				if (movieC === null) {
					const commentM = await Comment.create({ name: name, comment: [comment] });
					return res.json({ commentM });
				} else {
					const commentM = await Comment.updateOne({ name }, { $set: { comment: [...movieC.comment, comment] } });
					return res.status(200).send('ok');
				}
			}
		} catch (err) {
			console.log(err);
			return res.status(400).json({ error: "Erro no add" });
		}

	},

	async viewComment(req, res) {

		const comments = await Comment.find({ name: req.body.name });

		if (comments.length > 0) {
			return res.status(200).json({ comments });
		}

		return res.status(404).send("Nao existem filme comentarios com o nome: " + req.body.name);

	}

}