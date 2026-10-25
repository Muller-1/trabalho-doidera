import express from 'express'

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3001, function () {
    console.log("O teste da porta 3001 está funcionando!")
});