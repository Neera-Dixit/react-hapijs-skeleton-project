import Hapi from 'hapi';
import Path from 'path';

const server = new Hapi.Server();

server.connection({
    port: 8000,
    host: 'localhost'
});


server.register([{
    register: require('inert')   
}, {
  register: require('vision')
}], (err) =>  {

  if (err) return console.error(err);
  
    // Add the React-rendering view engine
    server.views({
        engines: {
            jsx: require('hapi-react-views')
        },
        compileOptions: {},
        relativeTo: __dirname,
        path: '../views'
    });

    // Add a route to serve static assets (CSS, JS, IMG)
    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: 'build'
        }
      }
    });

     // Add main app route
    server.route({
      method: 'GET',
      path: '/',
      handler: {
        view: 'Default'
      }
    });

    server.start(err => {
        if (err) {
            console.error( 'Error was handled!' );
            console.error( err );
        }
        console.log( `Server started at ${ server.info.uri }` );
    });
});
