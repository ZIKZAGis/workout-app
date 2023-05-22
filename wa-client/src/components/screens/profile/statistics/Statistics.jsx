import { useProfile } from '../useProfile'
import styles from './Statistics.module.scss'

const Statistics = () => {
    const {data} = useProfile()

    return (
        <div className={styles.wrapper}>
            {data?.statistics?.map((statistic, index) => (
                <div key={index} className={styles.count}>
                    <div className={styles.heading}>{statistic.label}</div>
                    <div className={styles.number}>{statistic.value}</div>
                </div>
            ))}
        </div>
    )
}

export default Statistics