const axios = require('axios');

const fetchData = async (id) =>{
  const resp = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
  return resp.data;
}


module.exports = fetchData;