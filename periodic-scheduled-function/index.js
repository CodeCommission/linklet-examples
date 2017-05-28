const {interval} = require('linklet');
let count = 0;
console.log(`Executes a function every 5s. Wait ...`);
module.exports = interval({period: 5000})(() => console.log(`${++count}x executed!`));