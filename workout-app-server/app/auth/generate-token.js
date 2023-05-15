import jwt from 'jsonwebtoken'

export const generateToken = userId => 
    jwt.sign(
        {
            userId
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '365d'
        }
    )