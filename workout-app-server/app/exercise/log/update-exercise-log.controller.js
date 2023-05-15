import asyncHandler from "express-async-handler";
import { prisma } from "../../prisma.js";

// @desc    Update exercise log time
// @route   PUT /api/exercises/log/time
// @access  Private

export const updateExerciseLogTime = asyncHandler(async(req, res) => {
    const {weight, repeat, isCompleted} = req.body

    try {
        const exerciseLogTime = await prisma.exerciseTime.update({
            where: {
                id: +req.params.id
            },
            data: {
                weight,
                repeat,
                isCompleted
            }
        })

        res.json(exerciseLogTime)

    } catch (error) {
        res.status(404)
        throw new Error('Время в журнале упражнений не найдено!')
    }
})

// @desc    Update status of complete exercise log
// @route   PATH /api/exercises/log/complete/:id
// @access  Private

export const completeExerciseLog = asyncHandler(async(req, res) => {
    const {isCompleted} = req.body

    try {
        const exerciseLog = await prisma.exerciseLog.update({
            where: {
                id: +req.params.id
            }, 
            data: {
                isCompleted
            },
            include: {
                exercise: true, 
                workoutLog: true
            }
        })

        res.json(exerciseLog)

    } catch (error) {
        res.status(404)
        throw new Error('Упражнение в журнале не найдено!')
    }
})