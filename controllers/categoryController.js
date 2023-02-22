const m$category = require('../modules/category.module')
const {Router}= require('express')
const response =require('../helpers/response')
const categoryController = Router()


categoryController.post('/', async (req, res)=>{
    const add= await m$category.createCategory(req.body)
    response.sendResponse(res, add)
})
categoryController.get('/', async (req, res)=>{
    const list= await m$category.listCategory()
    response.sendResponse(res, list)
})
categoryController.put('/:id', async (req, res)=>{
    const update= await m$category.updateCategory(Number(req.params.id),req.body)
    response.sendResponse(res, update)
})
categoryController.delete('/:id', async (req, res)=>{
    const dlt= await m$category.deleteCategory(Number(req.params.id))
    response.sendResponse(res, dlt)
})
module.exports =categoryController