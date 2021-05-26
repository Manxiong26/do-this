const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
    let sqlText = `SELECT * FROM task;`;
    pool.query(sqlText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.log('ERROR fetching distance', err);
        res.sendStatus(500)
    })
})

module.exports = router