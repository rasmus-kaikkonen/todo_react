import { pool } from "../helpers/db.js"
import { Router } from "express"
import { hash,compare } from "bcrypt"
import jwt from "jsonwebtoken"
import { postLogin, postRegistration } from "../controllers/userController.js"
const { sign } = jwt

const userRouter = Router()

userRouter.post('/register',(req,res,next) => {
    postRegistration(req,res,next)
})

userRouter.post('/login',(req,res,next) => {
    postLogin(req,res,next)
})

export default userRouter