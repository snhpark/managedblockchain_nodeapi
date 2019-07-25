const API = require('./api');
const config = require('./config');
const axios = require('axios');

/*****************TEST CODE**********
 
*/

axios.post(config.API_URL + 'get_path', {
    command1: "python\nprint(\"hyungeon babo\")"
}).then(res => {
    console.log(res)
})

/**************************************/