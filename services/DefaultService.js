/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
*
* paramName String description
* no response value expected for this operation
* */
const addPet = ({ paramName }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        paramName,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  addPet,
};
