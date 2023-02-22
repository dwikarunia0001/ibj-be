const prisma = require('../helpers/database')
const Joi = require('joi')

class _category{
    createCategory=async (body)=>{
        try{
            //validation input
            const schema=Joi.object({
                id:Joi.number().required(),
                name:Joi.string().required(),
            })
            const validation=schema.validate(body)
            if(validation.error){
                const errorDetails=validation.error.details.map(detail=>detail.message)
                return{
                    status:false,
                    code:422,
                    error:errorDetails.join(',')
                }
            }
            const add = await prisma.course_categories.create({
                data:{
                    id: body.id,
                    name:body.name,
                    complete:0
                }
            })
            return{
                status:true,
                data:add
            }
        }
        //validation
        catch(error){
            console.log("createCategory category module error", error)
            return{
                status: false,
                error:error.message
            }
        }
    }
    listCategory = async()=>{
        try{
            const list = await prisma.course_categories.findMany()
            return{
                status:true,
                data:list
            }
        }catch(error){
            console.log("ListCategory category module error", error)
            return{
                status: false,
                error:error.message
            }
        }
    }
    updateCategory = async(body)=>{
        try{
            const update = await prisma.course_categories.update({
                where:{
                    id:body.id
                },
                data:{
                    name:body.name,
                }
            })
            return{
                status:true,
                data:update
            }
        }catch(error){
            console.log("updateCategory category module error", error)
            return{
                status: false,
                error:error.message
            }
        }
    }
    deleteCategory = async(id)=>{
        try{
            const schema=Joi.number().required()
            const validation=schema.validate(id)
            if(validation.error){
                const errorDetails=validation.error.details.map(detail=>detail.message)
                return{
                    status:false,
                    code:422,
                    error:errorDetails.join(',')
                }
            }
            const dlt = await prisma.course_categories.delete({
                where:{
                    id: id
                }
            })
            return{
                status:true,
                data:dlt
            }
        }catch(error){
            console.log("DeleteCategory category module error", error)
            return{
                status: false,
                error:error.message
            }
        }
    }
}
module.exports= new _category