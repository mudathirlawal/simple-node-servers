const http = require( "http" );
const port = 1200;
const server = http.createServer();

let str = `
    App has started, and server is 
    listening for connection on port: ${port}.
`;

server.listen( 
    port, () => { console.log( str ); }
);



