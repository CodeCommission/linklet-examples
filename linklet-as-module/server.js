const SERVICE_PORT = process.env.SERVICE_PORT || 3000
const linklet = require('linklet');

const server = linklet((req, res) => ({message: 'Hello World from Linklet!'}));

const instance = server.listen(SERVICE_PORT, () => console.log(`Listen on ${instance.address().port}`));