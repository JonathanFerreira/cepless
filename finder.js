module.exports.cep = async (event) => {
  const number = event.pathParameters.number;
  const cepPromise = require('cep-promise');
  
  var response = {
    headers: {
      "Content-type": "application/json"
    }
  }

  try {
    return cepPromise(number)
      .then((result) => {
        response.statusCode = 200;
        response.body = JSON.stringify(result);
        return response;
      })
      .catch((error) => {
        const  { message } = error;
        response.statusCode = 400;
        response.body = JSON.stringify({error: message});
        return response;
      });
  } catch (err) {
    return err;
  }  
};