const linklet = require('linklet');

const server = linklet((req, res) => ({message: 'Hello World from Linklet!'}));

const instance = server.listen(5000, () => console.log(`Listen on ${instance.address().port}`));