import styles from './ExerciseLog.module.scss'
import HeaderExerciseLog from "./HeaderExerciseLog"
import Alert from "../../ui/alert/Alert"
import Loader from "../../ui/loader/Loader"
import { useExerciseLog } from "./hooks/useExerciseLog"
import ExerciseError from './ExerciseError'
import TableHeader from './TableHeader'
import TableRow from './TableRow'


const ExerciseLog = () => {
    const {exerciseLog, isSuccess, isLoading, error, getState, onChangeState, toggleTime} = useExerciseLog()

    return (
        <>
            <HeaderExerciseLog isSuccess={isSuccess} exerciseLog={exerciseLog}/>
            <div className="wrapper-inner-page" style={{paddingLeft: 0, paddingRight: 0}}>
                <ExerciseError errors={[error]}/>
                {isLoading ? (<Loader/>) : (
                    <div className={styles.wrapper}>
                        <TableHeader/>
                        {exerciseLog?.times.map((item) => (
                            <TableRow 
                                getState={getState}
                                onChangeState={onChangeState}
                                toggleTime={toggleTime}
                                item={item} 
                                key={item.id}
                            />
                        ))}
                    </div>
                )}
            </div>
            {isSuccess && exerciseLog?.times?.length === 0 && (
                <Alert type="warning" text='Times not Found'/>
            )}
        </>
    )
}

export default ExerciseLog