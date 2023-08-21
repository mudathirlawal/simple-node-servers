const http = require("http");
const port = 1003;
const server = http.createServer();

server.listen(port, () => {
    console.log(`App has started; and server is 
    listening for connection on port: ${port}.`
    );
});



