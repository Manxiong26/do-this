const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


router.get('/', (req, res) => {
    // let sqlText = `SELECT * FROM task;`;
    let sqlText = `SELECT * FROM task;`;
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

router.get('/random', (req, res) => {
    // let sqlText = `SELECT * FROM task;`;
    let sqlText = `SELECT *
    FROM  (
       SELECT DISTINCT 1 + trunc(random() * 10)::integer AS id
       FROM   generate_series(1, 1) g
       ) r
    JOIN   task USING (id)
    LIMIT  1;`;
    pool.query(sqlText)
    .then((result) => {
        console.log(sqlText);
        res.send(result.rows[0]);
    })
    .catch((err) => {
        console.log('ERROR fetching random', err);
        res.sendStatus(500)
    })
})

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

router.post('/', rejectUnauthenticated, (req, res) => {
    const user_id = req.user.id
    const task_id = req.body.id
    const completed = req.body.completed
    const notes = req.body.notes
    console.log('CHECKING REQSSS',req.body, task_id, completed, notes);
    
    let sqlText = `INSERT INTO task_user ("user_id", "task_id", "completed", "notes")
VALUES ($1, $2, $3, $4)
RETURNING "id";`;

    pool.query(sqlText, [user_id, task_id, completed, notes])
        .then(result => {
            console.log('task posted:', result.rows[0].id);
            res.sendStatus(201)
        })
        .catch(err => {
            console.log('ERROR ADDING TASK', err);
            res.sendStatus(500)
        })
})



module.exports = router