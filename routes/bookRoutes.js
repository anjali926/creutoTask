import express from 'express'
import { createBook, getBook } from '../controller/booksController.js'

const router=express.Router()
router.post('/create-book',createBook)
router.get('/get-book',getBook)

export default router