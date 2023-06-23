const User = require("../../models/users");

deleteFriend = async (req, res) => {
    console.log('Inside deleteFriend controller');
  try {
    const { user, friend } = req.body

    const foundUser = await User.findById(user);
/*  console.log('User:', foundUser);
console.log('lista amici', foundUser.friends)*/
  
    const friendToDelete = await User.findOne({ username: friend })
   // console.log('Request Body:', { user: user, friend: friendToDelete });

    if (!friendToDelete) {
      return res.status(401).json({ error: 'Utente non trovato' })}
     
      if (!foundUser.friends) {
        foundUser.friends = [];
      }

      
    const friendIndex = foundUser.friends.findIndex(friendId => friendId.toString() === friendToDelete._id.toString());

    
    if (friendIndex === -1) {
        return res.status(400).json({ error: 'Amico non presente nella lista di amici' })
      }
  
      foundUser.friends.splice(friendIndex, 1)
  
    await foundUser.save();
    res.json({ message: 'Amico eliminato correttamente' });
  } catch (error) {
    console.log('Errore:', error);
    res.status(500).json({ message: 'Errore del server' });
  }
}



module.exports=deleteFriend


