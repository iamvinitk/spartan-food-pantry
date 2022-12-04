// simple express server

import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from Auth!');
});

app.listen(3000, () => {
  console.log('Listening at http://localhost:3000');
});
