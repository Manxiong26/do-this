const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

  router.get('/:id', (req, res) => {
    // let sqlText = `SELECT * FROM task;`;
    console.log('CHECKING THE ID', req.user);
    console.log('CHECKING PARAMS ID', req.params);
    console.log('CHECKING THE BODY', req.body);
    
    let sqlText = `
    SELECT user_id, task.name_task, task.task_description, completed, task_user.id, notes FROM task
    JOIN task_user ON task_user.task_id = task.id
    WHERE task_user.id = ${req.params.id};`;

    pool.query(sqlText)
        .then((result) => {
            console.log(result.rows[0]);
            res.send(result.rows[0]);
        })
        .catch((err) => {
            console.log('ERROR fetching task_user', err);
            res.sendStatus(500)
        });
})


router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('UPDATING TASK AS COMPLETE', req.params );
    console.log('CHECKING THE REQ.BODY', req.body);
    
    let idToUpdate = req.params.id;
    
    let sqlText = `UPDATE task_user SET notes=$2 WHERE id = $1;`
    pool.query(sqlText, [idToUpdate, req.body.notes])
    .then((result) => {
        console.log(sqlText);
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log('ERROR making database update', err);
        res.sendStatus(500)
    })
});

module.exports = router