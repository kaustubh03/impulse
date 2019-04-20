import express from 'express'
import routes from './src/routes/routes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
var cors = require('cors')

const app = express()
const PORT = 5000

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/quotes", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(cors());

routes(app)

app.listen(PORT, () => {
    console.log(`you are server is running on ${PORT}`);
})
