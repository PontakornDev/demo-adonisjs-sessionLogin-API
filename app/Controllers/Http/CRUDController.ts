import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class CRUDController {
  public async index ({response}: HttpContextContract){
    const data = await Database
      .query()
      .from('ce30') // 👈 gives an instance of select query builder
      .select('*')
    if(!data){
      response.badRequest(data)
    }
    return data
  }

  public async create ({request, response}: HttpContextContract){
    // await auth.use('web').authenticate()
    const dataRequest = request.all()
    console.log(dataRequest)

    await Database
      .insertQuery() // 👈 gives an instance of insert query builder
      .table('ce30')
      .insert({ mirot30: dataRequest.mirot30, crru30: dataRequest.crru30 })
      .then(() => {
        response.ok(Database)
      })
      .catch((err: any) => {
        response.notFound(err)
      })
  }

  public async delete ({response, params}: HttpContextContract){
    const deleteID = await Database.from('ce30').where('id', params.id).delete()
    if(!deleteID){
      return response.notFound({ message: `can't delete id:${params.id} because id not found` })
    }else{
      return response.ok([{ message: 'delete successfully!!' }])
    }
  }

  public async edit ({response, params}: HttpContextContract){
    const editData = await Database.from('ce30').where('id', params.id)
    if(!editData){
      response.notFound({ message: `can't delete id:${params.id} because id not found` })
    }
    return editData[0]
  }

  public async update ({request, response, params}: HttpContextContract) {
    const data: any = request.requestData
    const updateData = await Database.from('ce30').where('id', params.id).update(data)
    if(!updateData){
      return response.notFound({ message: `can't update id:${params.id} because id not found` })
    }else {
      return response.ok({ id: `${params.id}`, update_data: data })
    }
  }
}
