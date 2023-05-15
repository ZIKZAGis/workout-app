import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import authRoutes from './app/auth/auth.routes.js'
import 'colors'
import { prisma } from './app/prisma.js'
import { errorHandler, notFound } from './app/middleware/error.middleware.js'
import userRoutes from './app/user/user.routes.js'
import workoutRoutes from './app/workout/workout.routes.js'
import exerciseRoutes from './app/exercise/exercise.routes.js'



dotenv.config()

const app = express()

async function main() {
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'))
    }
    
    app.use(cors())
    app.use(express.json())

    const __dirname = path.resolve()

    app.use('/uploads', express.static(path.join(__dirname, '/uploads/')))

    app.use('/api/auth', authRoutes)
    app.use('/api/users', userRoutes)
    app.use('/api/exercises', exerciseRoutes)
    app.use('/api/workouts', workoutRoutes)

    app.use(notFound)
    app.use(errorHandler)

    const PORT = process.env.PORT || 5000

    app.listen(
        PORT,
        console.log(
            `Сервер запущен в ${process.env.NODE_ENV} режиме, порт ${PORT}`.blue.bold
        )
    )
}

main().then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})