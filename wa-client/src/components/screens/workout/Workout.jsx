import { useQuery } from '@tanstack/react-query'
import styles from './Workout.module.scss'
import { useParams } from 'react-router-dom'
import workoutLogService from '../../../services/workout/workout-log.service'
import cn from 'clsx'
import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header'

const Workout = () => {
    const {id} = useParams()
    const {data: workoutLog, isSuccess} = useQuery(['get workout log', id], () => workoutLogService.getById(id), {
        select: ({data}) => data
    })

    return (
        <>
            <div className={cn(stylesLayout.wrapper, stylesLayout.otherPage )}
                style={{backgroundImage: `url('/images/home-bg3.jpg')`, height: 356}}
            >
                <Header backLink='/workouts'/>
                {isSuccess && (
                    <div>
                        <time className={styles.time}>{workoutLog.minute + ' min.'}</time>
                        <h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
                    </div>
                )}
            </div>
            <div className='wrapper-inner-page' style={{paddingLeft: 0, paddingRight: 0}}>
                <div style={{width: '90%', margin: '0 auto'}}>
                    {/* {errorCompleted && <Alert type='error' text={errorCompleted}/>} */}
                </div>
            </div>
        </>
    )
}

export default Workout