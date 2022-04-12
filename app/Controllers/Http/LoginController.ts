import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'
import Logger from '@ioc:Adonis/Core/Logger'

export default class LoginController {
  public async signUp ({ auth, request, response, session }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    console.log(auth.use('web').attempt(email, password))

    try {
      await auth.use('web').attempt(email, password)
      await console.log(session)
      return response.ok(session)
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }

  public async register ({ auth, request, response }){
    const email = request.input('email')
    const password = request.input('password')

    const user = new User()
    user.email = email
    user.password = password

    await user.save()
    Logger.info({ user: user.id }, 'User register successfully')
    try{
      return response.ok(user)
    }catch{
      return response.badRequest('Invalid')
    }
  }
}
