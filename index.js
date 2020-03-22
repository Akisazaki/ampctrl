const PORT = 80;

const connect = require('connect');
const serveStatic = require('serve-static');
const path = require('path');

connect()
    .use(serveStatic(path.join(__dirname, "public")))
    .listen(80, () => console.log(`Server running on ${PORT}...`));