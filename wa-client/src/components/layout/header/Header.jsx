import { useLocation, useNavigate } from 'react-router-dom'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'
import {FiArrowLeft, FiUser} from 'react-icons/fi'
import { useAuth } from '../../../hooks/useAuth'

// eslint-disable-next-line react/prop-types
const Header = ({backLink = '/'}) => {
    const {pathname} = useLocation()
    const navigate = useNavigate()

    const {isAuth} = useAuth()

    return (
        <header className={styles.header}>
            {(pathname !== '/' || !isAuth) ? 
                <button aria-label='Go to profile' onClick={() => {navigate(isAuth ? backLink : '/auth')}}>
                    <FiArrowLeft/>
                </button>
                : 
                <button aria-label='Go back' onClick={() => {navigate('/profile')}}>
                    <FiUser/>
                </button>
            }
            {isAuth && <Hamburger/>}
        </header>
    )
}

export default Header