import Layout from '../../layout/Layout'
import Alert from '../../ui/alert/Alert'
import Loader from '../../ui/loader/Loader'
import styles from './Workout.module.scss'
import WorkoutItem from './WorkoutItem'
import { useWorkouts } from './useWorkouts'

const ListWorkouts = () => {
    const {data, isSuccess, mutate, isLoading, isSuccessMutate, error} = useWorkouts()
    return (
        <>
            <Layout bgImage='/images/home-bg.jpg' heading='Workout list'/>
            <div className='wrapper-inner-page' style={{paddingLeft: 0, paddingRight: 0}}>
                {error && <Alert type='error' text={error}/>}
                {isSuccessMutate && <Alert text='Workout log created'/>}
                {isLoading && <Loader/>}
                {isSuccess && (
                    <div className={styles.wrapper}>
                        {data.map((workout) => (
                            <WorkoutItem key={workout.id} workout={workout} mutate={mutate}/>
                        ))}
                    </div>
                )}
                {isSuccess && data?.length === 0 && (
                    <Alert type='warning' text='Workouts not found'/>
                )}
            </div>
        </>
    )
}

export default ListWorkouts