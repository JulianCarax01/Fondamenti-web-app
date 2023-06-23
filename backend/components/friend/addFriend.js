const User = require("../../models/users");

addFriend = async (req, res) => {
  try {
    const { user, friend } = req.body

    const foundUser = await User.findById(user).populate('friends');
    /*Per vedere se funziona: console.log('lo user è ', foundUser)
    console.log('lista amici', foundUser.friends)*/
  
    const friendToAdd = await User.findOne({ username: friend })

    if (!friendToAdd) {
      return res.status(401).json({ error: 'Utente non trovato' })}

      if (!foundUser.friends) {
        foundUser.friends = [];
      }

      const isFriendAlreadyAdded = foundUser.friends.some((friendId) => friendId.equals(friendToAdd._id));
    if (isFriendAlreadyAdded) {
      return res.status(400).json({ error: 'Utente già presente nella lista di amici' });
    }

        foundUser.friends.push(friendToAdd._id);
        await foundUser.save();
        res.json({ message: 'Amico aggiunto correttamente' })
      } catch (error) {
        console.log('Errore: ', error)
        res.status(500).json({ message: 'Errore del server' })
      }
   };


module.exports=addFriend
