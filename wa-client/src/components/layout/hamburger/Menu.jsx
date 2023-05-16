import styles from './Hamburger.module.scss'
import cn from 'clsx'
import { menu } from './menu.data'

// eslint-disable-next-line react/prop-types
const Menu = ({isShow}) => {
    const handleLogout = () => {

    }

    return (
        <nav className={cn(styles.menu, {[styles.show]: isShow})}>
            <ul>
                {menu.map((item, index) => {
                    <li key={`_menu_${index}`}>
                        {item.title}
                    </li>
                })}
                <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    )
}

export default Menu