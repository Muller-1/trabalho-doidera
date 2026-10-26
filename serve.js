import express from 'express'
import cors from 'cors'
import { campanhas } from './dados.js'

const app = express();
const port = 3001;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/campanhas', (req, res) => {
  res.json([campanhas])
})
app.listen(3001, function () {
    console.log("O teste da porta 3001 está funcionando!")
});

