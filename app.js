'use strict';
const axios = require('axios');
axios.getAdapter('https://www.google.com').then(res =>{
  console.log(res.data);
});