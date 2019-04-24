const axios = require('axios');


getSearch((books) =>{
return axios.get("/api/books");
});
module.exports=axios;