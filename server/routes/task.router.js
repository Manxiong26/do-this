const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
    // let sqlText = `SELECT * FROM task;`;
    let sqlText = `SELECT *
    FROM  (
       SELECT DISTINCT 1 + trunc(random() * 7)::integer AS id
       FROM   generate_series(1, 7) g
       ) r
    JOIN   task USING (id)
    LIMIT  1;`;
    pool.query(sqlText)
    .then((result) => {
        console.log(sqlText);
        res.send(result.rows);
    })
    .catch((err) => {
        console.log('ERROR fetching distance', err);
        res.sendStatus(500)
    })
})

module.exports = router