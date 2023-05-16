import styles from './Hamburger.module.scss'
import {CgMenuRight} from 'react-icons/cg'
import {VscClose} from 'react-icons/vsc'
import Menu from "./Menu"
import { useOnClickOutside } from "../../../hooks/useOnClickOutside"

const Hamburger = () => {
    const {ref, isShow, setIsShow} = useOnClickOutside(false)

    return (
        <div className={styles.wrapper} ref={ref}>
            <button onClick={() => setIsShow(!isShow)}>
                {isShow ? 
                    <VscClose/> : <CgMenuRight/>}
            </button>
            <Menu isShow={isShow}/>
        </div>
    )
}

export default Hamburger