const Games = require ('../models/GameModel');

const createGame = async game => {
    try {
      const newGame = new Games(game);
      await newGame.save();
      console.log("createGame succeeded");
    } catch (error) {
        error.status = 400;
        return console.log(("createGame: ", error));
    }
}
const getGames = async () => {
    try {
      const games = await Games.find();
      console.log("getGames succeeded");
      return Promise.resolve(games);
    } catch (error) {
        error.status = 400;
        return console.log(("getGames: ", error));
    }
}

const getGame = async id => {
    try {
      if(!id) {
        throw Error ('thare is no value inside the ID');
      } 
      const game = await Games.findById(id);
      if(!game) {
        throw Error ('that ID is not found');
      }
      console.log("getGame succeeded");
      return Promise.resolve(game);
    } catch (error) {
        error.status = 400;
        return console.log(("getGame: ", error));
    }
}

const deleteGame = async id => {
    try {
      if(!id) {
        throw Error ('thare is no value inside the ID');
      } 
      const deleteGame = await Games.findByIdAndDelete(id);
      if(!deleteGame) {
        throw Error ('that ID is not found');
      }
      console.log("deleteGame succeeded");
    } catch (error) {
        error.status = 400;
        return console.log(("deleteGame: ", error));
    }
}
const updateGame = async (id, game) => {
    try {
      if(!id) {
        throw Error ('thare is no value inside the ID');
      } 
      const updatedGame = await Games.findByIdAndUpdate(id, game);
      
      if(!updatedGame) {
        throw Error ('that ID is not found');
      }
      console.log("update succeeded");
    } catch (error) {
        error.status = 400;
        return console.log(("update: ", error));
    }
}

exports.createGame = createGame;
exports.getGames = getGames;
exports.getGame = getGame;
exports.deleteGame = deleteGame;
exports.updateGame = updateGame;