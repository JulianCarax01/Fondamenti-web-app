const User = require("../../models/users");

viewFriends = async (req, res) => {

    try {
        const { userId } = req.body;
    
        const foundUser = await User.findById(userId).populate('friends');
    
        if (!foundUser) {
          return res.status(404).json({ error: 'Utente non trovato' });
        }
    
        if (foundUser.friends.length === 0) {
          return res.json({ error: 'Non sono presenti amici nella lista' });
        }
    
        res.json({ friends: foundUser.friends });
      } catch (error) {
        console.log('Errore:', error);
        res.status(500).json({ message: 'Errore del server' });
      }
    
}


module.exports=viewFriends