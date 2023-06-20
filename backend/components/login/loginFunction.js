const User = require("../../models/users");



loginUser = async (req, res) => {
    try {
        const {username, password} = req.body
        const user = await User.findOne({username: `${username}`, password: `${password}`});
        if (!user) {
            return res.status(401).json({error: 'Le credenziali sono errate. Riprova.'});
        }

        req.session.userId = user._id;
        req.session.password = user.password;
        user.logged = true
        //await user.save()

        res.status(200).json({
            user: user
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({error: 'Errore server'});
    }
}

module.exports = loginUser