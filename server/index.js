const express = require('express');
const { json } = require('body-parser');
const path = require('path');

const port = 3001;

const app = express();

app.use(json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(`${__dirname}/../build`));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
  });
  app.listen(port);
} else {
  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
}
