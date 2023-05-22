import { useLocation } from "react-router-dom"
import { useAuth } from "./useAuth"
import { TOKEN } from "../app.constants"
import Cookies from "js-cookie"
import { useEffect } from "react"

export const useCheckToken = () => {
    const {isAuth, setIsAuth} = useAuth()
    const {pathname} = useLocation()

    useEffect(() => {
        const token = Cookies.get(TOKEN)
        if(!token) setIsAuth(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, isAuth])
}