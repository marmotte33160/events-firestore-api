const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('route', (req, res) => {
    res.send('this is our first getit ? ')
})
app.listen(5000, () => {
console.log('we are connected on 5000')

})