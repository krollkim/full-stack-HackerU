const connectToDb = require ('./connectToDB');
const Games = require ('./models/GameModel');
const Manufactor = require ('./models/ManufactorModel');
const { 
        createManufactor, 
        getManufactors, 
        getManufactor, 
        deleteManufactor 
    } = require('./services/manufactureAccessDataService');
const { 
        createGame,
        getGames,
        getGame,
        deleteGame,
        updateGame,
    } = require('./services/gamesAccessDataService');

connectToDb ();

// createManufactor({
//     name: 'GameModel - industry',
//     country: 'US',
//     daysToCreate: 10,
//     employeesNumber: 70,
//     yearOfFoundation: 2000,
//     modifiedTo: 'XBOX - consoles',
// })
// createManufactor({
//     name: 'georgy industry',
//     country: 'china',
//     daysToCreate: 5,
//     employeesNumber: 100,
//     yearOfFoundation: 1995,
//     modifiedTo: 'XBOX, PC - consoles',
// })
// createManufactor({
//     name: 'GamesOnline',
//     country: 'UK',
//     daysToCreate: 20,
//     employeesNumber: 20,
//     yearOfFoundation: 2020,
//     modifiedTo: 'XBOX, PC, PS - consoles',
// })


// const getAllManufactors = async () => {
//   const data = await getManufactors();
//   console.log (data);
// };
// const getManufactorById = async id => {
//     const data = await getManufactor(id);
//     console.log (data);
//   };
// const deleteManufactorById = async id => {
//     await deleteManufactor(id);
//   };

// getAllManufactors();
// getManufactorById('64a5a702437ef1a1ada2e052');
// deleteManufactorById('64a5a702437ef1a1ada2e052');

// createGame({
//     name: "kingOfEmpire",
//     numberOfParticipants: 3,
//     minAge: 16,
//     cost: 340,
//     monthsProductWarranty: 6,
//     manufactorId: '64a5a7351b49c85e49cebd35',
// });
// createGame({
//     name: "Grow&Flow",
//     numberOfParticipants: 1,
//     minAge: 18,
//     cost: 350,
//     monthsProductWarranty: 6,
//     manufactorId: '64a5a7351b49c85e49cebd35',
// });
// createGame({
//     name: "ClashOfKings",
//     numberOfParticipants: 3,
//     minAge: 18,
//     cost: 260,
//     monthsProductWarranty: 6,
//     manufactorId: '64a5ade29c725c7626de1ec7',
// });
// createGame({
//     name: "KingsOfDown",
//     numberOfParticipants: 5,
//     minAge: 14,
//     cost: 170,
//     monthsProductWarranty: 6,
//     manufactorId: '64a5ade29c725c7626de1ec7',
// });
// createGame({
//     name: "OfKings",
//     numberOfParticipants: 2,
//     minAge: 18,
//     cost: 200,
//     monthsProductWarranty: 6,
//     manufactorId: '64aaccb879ec244d8b9abcd2',
// });
// createGame({
//     name: "Brazzers",
//     numberOfParticipants: 1,
//     minAge: 18,
//     cost: 300,
//     monthsProductWarranty: 6,
//     manufactorId: '64aaccb879ec244d8b9abcd2',
// });

// const getAllGames = async () => {
//   const data = await getGames();
//   console.log (data);
// };
// getAllGames();

// const getGameById = async id => {
//     const data = await getGame(id);
//     console.log (data);
//   };
// getGameById('64aad1f666402a66b213b6c0');

// const deleteGameById = async id => {
//     await deleteGame(id);
//   };
//   deleteGameById('64aad1f666402a66b213b6c2')

const updateGameById = async (id, game) => {
    await updateGame(id, game);
  };

  updateGameById('64aad1f666402a66b213b6c5', {
    name: 'Brazzers 2.0',
    numberOfParticipants: 2,
    minAge: 21,
    cost: 500,
    monthsProductWarranty: 12,
  })