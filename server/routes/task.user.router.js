const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

// router.get('/:id', (req, res) => {
//     let id = req.params.id;
//     console.log('Id of chosen task', id);
//     let sqlText = `
//     SELECT user_id, task.name_task, task.task_description FROM task_user
// JOIN task ON task_user.task_id = task.id
// JOIN "user" ON task_user.user_id = "user".id
// WHERE task.id = $1;`;
// pool.query(sqlText, [id])
// .then((result) => {
//     console.log(result[0]);
//     res.send(result.row[0])
// })
// })


// router.get('/', (req, res) => {
//     // let sqlText = `SELECT * FROM task;`;
//     let sqlText = `SELECT * FROM task_user;`;
//     pool.query(sqlText)
//     .then((result) => {
//         console.log(sqlText);
//         res.send(result.rows);
//     })
//     .catch((err) => {
//         console.log('ERROR fetching task_user', err);
//         res.sendStatus(500)
//     })
// })

router.get('/', (req, res) => {
    // let sqlText = `SELECT * FROM task;`;
    let sqlText = `
    SELECT user_id, task.name_task, task.task_description, completed, task_user.id, notes FROM task
    JOIN task_user ON task_user.task_id = task.id
    WHERE user_id = ${req.user.id};`;
    pool.query(sqlText)
        .then((result) => {
            console.log(result.rows);
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('ERROR fetching task_user', err);
            res.sendStatus(500)
        });
})



// router.get('/', (req, res) => {
//     // let sqlText = `SELECT * FROM task;`;
//     let sqlText = `
//     SELECT user_id, task.name_task, task.task_description FROM task_user
//     JOIN task ON task.id = task_user.task_id
//     JOIN "user" ON "user".id = task_user.user_id;`;
//     pool.query(sqlText)
//     .then((result) => {
//         console.log(sqlText);
//         res.send(result.rows);
//     })
//     .catch((err) => {
//         console.log('ERROR fetching distance', err);
//         res.sendStatus(500)
//     })
// })

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('Delete request for id', req.user.id);
    let sqlText = `DELETE FROM task_user WHERE id = $1 AND user_id = ${req.user.id}`;
    
    pool.query(sqlText, [req.params.id])
        .then((result) => {

            console.log(sqlText);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(`ERROR making database query ${sqlText}`, err);
            res.sendStatus(500)
        })
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('UPDATING TASK AS COMPLETE', req.params );
    let idToUpdate = req.params.id;
    
    let sqlText = `UPDATE task_user SET completed = true WHERE id = $1;`
    pool.query(sqlText, [idToUpdate])
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