const Manufactor = require ('../models/ManufactorModel');


const createManufactor = async manufactor => {
    try {
      const newManufactor = new Manufactor(manufactor);
      await newManufactor.save();
      console.log("createManufactor succeeded");
    } catch (error) {
        error.status = 400;
        return console.log(("createManufactor: ", error));
    }
}
const getManufactors = async () => {
    try {
      const manufactors = await Manufactor.find();
      console.log("getManufactors succeeded");
      return Promise.resolve(manufactors);
    } catch (error) {
        error.status = 400;
        return console.log(("getManufactor: ", error));
    }
}

const getManufactor = async id => {
    try {
      if(!id) {
        throw Error ('thare is no value inside the ID');
      } 
      const manufactor = await Manufactor.findById(id);
      if(!manufactor) {
        throw Error ('that ID is not found');
      }
      console.log("getManufactor succeeded");
      return Promise.resolve(manufactor);
    } catch (error) {
        error.status = 400;
        return console.log(("getManufactor: ", error));
    }
}
const deleteManufactor = async id => {
    try {
      if(!id) {
        throw Error ('thare is no value inside the ID');
      } 
      const deleteManufactor = await Manufactor.findByIdAndDelete(id);
      if(!deleteManufactor) {
        throw Error ('that ID is not found');
      }
      console.log("deleteManufactor succeeded");
    } catch (error) {
        error.status = 400;
        return console.log(("deleteManufactor: ", error));
    }
}
   

  exports.createManufactor = createManufactor;
  exports.getManufactors = getManufactors;
  exports.getManufactor = getManufactor;
  exports.deleteManufactor = deleteManufactor;