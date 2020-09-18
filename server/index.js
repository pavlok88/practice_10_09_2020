const express = require('express')
const routes = require('./src/routes');
const app = express()
const port = 4000

app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})