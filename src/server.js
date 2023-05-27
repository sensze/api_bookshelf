const Hapi = require('@hapi/hapi');
// files
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host:
    'localhost',
      // process.env.NODE_ENV === 'development'
      //   ? 'localhost'
      //   : 'web_hosting',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
