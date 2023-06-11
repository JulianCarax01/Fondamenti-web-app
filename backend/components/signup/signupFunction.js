const User = require("../../models/users");


  addUser = async (req, res) => {
    const { firstName, lastName, username, password, gender, birthday } = req.body;
    
    try {
      const existingUser = await User.findOne({ username });
    
      if (existingUser) {
        return res.status(400).json({ message: 'Lo username è già stato utilizzato. Si prega di sceglierne un altro.' });
      }
    
      const newUser = new User({ firstName, lastName, username, password, gender, birthday });
      await newUser.save();
    
      res.json({ message: 'Utente aggiunto!' });
    } catch (error) {
      console.log('Errore durante l\'inserimento dell\'utente:', error);
      res.status(500).json({ message: 'Errore del server' });
    }
   };


module.exports=addUser



