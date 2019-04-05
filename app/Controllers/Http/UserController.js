'use strict'
const User = use('App/Models/User')

class UserController {
    async login ({ auth, request, response }) {
        try {
            const { email, password } = request.all()
            await auth.attempt(email, password)
    
            response.redirect('/')
        }
        catch (error) {
            console.log(error);
        }
    }
    async logout ({ auth, response }) {
        await auth.logout()
        response.redirect('/')
    }
    async register ({ request, response }) {
        try { 
            const { username, email, password } = request.all()
            const user = await User.findOrCreate(
                {
                  email
                },
                {
                  username,
                  email,
                  password
                }
            )
      
            await user.save()
      
            response.redirect('/login')

        }
        catch (error) {
            console.log(error)
        }
    }
}

module.exports = UserController
