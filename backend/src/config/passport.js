import passport from 'passport'
import passprtjwt from 'passport-jwt'

import User from '../app/models/geninfoModel.js'

const JwtStratery = passprtjwt.Strategy
const ExtractJwt = passprtjwt.ExtractJwt


//Passport JWT
passport.use(new JwtStratery({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('Authorization'),
    secretOrKey: process.env.JWT_SECRET
}, async (payload, done) => {
    try {
        const user = await User.findById(payload.sub)

        if (!user) return done(null, false)
        done(null, user)
    } catch (error) {
        done(error, false)
    }
}))