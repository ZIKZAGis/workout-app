import styles from './Field.module.scss'

// eslint-disable-next-line react/prop-types
const Field = ({register, name, options, error, ...rest}) => {
    return (
        <div>
            <input {...register(name, options)} {...rest} className={styles.input}/>
            {error && <div className={styles.error}>{error}</div>}
        </div>

    )
}

export default Field