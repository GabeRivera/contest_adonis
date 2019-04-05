'use strict'
const Startup = use('App/Models/Startup')

class StartupController {
    async create ({ auth, request, response }) {
        try { 
            const { name, description, url, logo_url } = request.all()
            const startup = await Startup.findOrCreate(
                {
                    user_id: auth.user.id
                },
                {
                    name,
                    description,
                    url,
                    logo_url,
                    user_id: auth.user.id,
                    approved: false,
                }
            )
      
            await startup.save()
      
            response.redirect('/')

        }
        catch (error) {
            console.log(error)
        }
    }
}

module.exports = StartupController
