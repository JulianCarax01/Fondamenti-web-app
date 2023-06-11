const User = require("../../models/users");
const path = require('path');


loginUser=async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username, password: req.body.password });

        if (!user) {
            return res.redirect('/?error=credenzialierrate');
        }

        req.session.userId = user._id;
        req.session.password = user.password;
        user.logged=true
        user.save()
        res.sendFile(path.join(__dirname, "../../sendMessage.html"));
    } catch (err) {
        console.error(err);
        res.status(500).send('Errore del server');
    }
}

module.exports=loginUser