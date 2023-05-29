import { useQuery } from "@tanstack/react-query"
import exerciseLogService from "../../../../services/exercise/exercise-log.service"
import { useParams } from "react-router-dom"


export const useExerciseLog = () => {
    const {id} = useParams()

    const {data: exerciseLog, isSuccess, isLoading} = useQuery(
        ['get exercise log', id],
        () => 
            exerciseLogService.getById(id), {
                select: ({data}) => data
            }
    )

    return {
        exerciseLog,
        isSuccess,
        isLoading
    }
}