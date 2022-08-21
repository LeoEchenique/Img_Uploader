const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const PORT = process.env.PORT || 3001;



server.listen(PORT, () => console.log(`listening on port ${PORT} 22`))


