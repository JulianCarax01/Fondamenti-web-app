const User = require("../../models/users");


  addUser = async (req, res) => {
    const {firstName, lastName, _id, password, gender, birthday } = req.body;

    try {
      const newUser = new User({firstName, lastName, password, gender, birthday });
      await newUser.save();

      res.json({ message: 'Utente aggiunto!' });
    } catch (error) {
      console.log('Errore durante l\'inserimento dell\'utente:', error);
      res.status(500).json({ message: 'Errore del server' });
    }
  
};


module.exports=addUser