const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

//Get stuff
router.get('/', async (req, res) => {
    const gets = await loadCollection('schedule')
    res.send(await gets.find({Week: 1}).toArray())
})

async function loadCollection(col){
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://santiagoar:pancho98@basesavanzadas-x4i4d.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return client.db('nfl-pickem').collection(col)
}

module.exports = router;