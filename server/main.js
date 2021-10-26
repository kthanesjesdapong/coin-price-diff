const port = 5000;
const server = require('./server.js');

const init = async () => {
  try {
    server.listen(port, () =>
      console.log(`
            Listening on port ${port}
            
            http://localhost:${port}
            `)
    );
  } catch (err) {
    console.log(`There was an error starting up!`, err);
  }
};

init();
