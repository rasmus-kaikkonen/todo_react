import fs from 'fs'
import path from 'path'
import { pool } from './db.js'
import { hash } from 'bcrypt'
import jwt from 'jsonwebtoken'
const { sign } = jwt

const __dirname = import.meta.dirname

const intializeTestDb = () => {
    const sql = fs.readFileSync(path.resolve(__dirname,"../db.sql"), "utf8")
    console.log(__dirname)
    pool.query(sql)
}

const inserTestUser = (email, password) => {
    hash(password,10,(error,hashedPassword) => {
        pool.query('insert into account (email,password) values ($1,$2)',
            [email,hashedPassword])
    })
}

const getToken = (email) => {
    return sign({user:email},process.env.JWT_SECRET_KEY)
}

export { intializeTestDb, inserTestUser, getToken }