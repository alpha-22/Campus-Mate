const express = require('express')
const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`listening for requests on ${PORT}`);
})