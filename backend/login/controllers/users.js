const User = require('../models/users');

module.exports = {
    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({ username: req.body._id, password: req.body.password });

            if (!user) {
                return res.status(404).send('Utente non trovato');
            }

            req.session.userId = user._id;
            req.session.password = user.password;
            res.send('Accesso riuscito');
        } catch (err) {
            console.error(err);
            res.status(500).send('Errore del server');
        }
    }
};
