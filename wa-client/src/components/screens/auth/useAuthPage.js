import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../hooks/useAuth"
import { useEffect, useMemo, useState } from "react"
import authService from "../../../services/auth.service"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

export const useAuthPage = () => {

    const [type, setType] = useState('login')

    const {
        register, 
        handleSubmit, 
        formState: {errors},
        reset
    } = useForm({
        mode: 'onChange'
    })

    const {isAuth, setIsAuth} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuth) {
            navigate('/')
        }
    }, [isAuth])

    const {mutate, isLoading} = useMutation(
        ['auth'],
        ({email, password}) => authService.main(email, password, type),
        {
            onSuccess: () => {
                setIsAuth(true)
                reset()}
            }
        )

    const onSubmit = (data) => {
        mutate(data)
    }

    return useMemo(
        () => ({
            setType,
            register,
            handleSubmit,
            errors,
            isLoading,
            onSubmit
        }), 
        [errors, isLoading])
}