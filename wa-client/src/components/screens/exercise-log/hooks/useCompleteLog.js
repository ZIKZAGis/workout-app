import { useMutation } from "@tanstack/react-query"
import exerciseLogService from "../../../../services/exercise/exercise-log.service"
import { useNavigate, useParams } from "react-router-dom"

export const useCompleteLog = () => {
    const {id} = useParams()

    const navigate = useNavigate()

    const {mutate, error: errorCompleted} = useMutation(['complete log'], (body) => exerciseLogService.complete(id, body), {
        onSuccess: ({data}) => {
            navigate(`/workout/${data.workoutLogId}`)
        }
    })

    return {completeLog: mutate, errorCompleted}
}