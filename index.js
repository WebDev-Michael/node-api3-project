// require your server and launch it
const server = require("./api/server")

const PORT = 9000

server.listening(PORT, () => {
    console.log('listening on ', PORT)
})