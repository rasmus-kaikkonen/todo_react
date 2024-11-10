/* eslint-disable no-undef */
import { pool } from '../helpers/db.js'
import { Router } from 'express'
import { auth } from '../helpers/auth.js';
import { getTasks, postTask } from '../controllers/TaskController.js';

const todoRouter = Router()

todoRouter.get('/',(req,res,next) => {
    getTasks(req,res,next);
});

todoRouter.post('/create',auth,(req,res,next) => {
    postTask(req,res,next);
});

todoRouter.delete('/delete/:id',auth,(req,res,next) => {
    const id = parseInt(req.params.id);

    pool.query('delete from task where id = $1',
        [id],
        (error,result) => {
            if(error) {
                return next(error)
            }
            return res.status(200).json({id: id})
        }
    )
})

export default todoRouter