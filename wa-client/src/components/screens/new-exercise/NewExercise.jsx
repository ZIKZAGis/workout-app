import { useMutation } from "@tanstack/react-query"
import exerciseService from "../../../services/exercise/exercise.service"
import Layout from "../../layout/Layout"
import { useForm, Controller } from "react-hook-form"
import Field from "../../ui/field/Field"
import Loader from "../../ui/loader/Loader"
import Button from "../../ui/button/Button"
import styles from './NewExercise.module.scss'
import cn from 'clsx'
import Alert from "../../ui/alert/Alert"
import { getIconPath } from "./icon-path.util"

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewExercise = () => {
    const {
        register, 
        handleSubmit, 
        formState: {errors},
        reset,
        control
    } = useForm({
        mode: 'onChange'
    })

    const {isSuccess, isLoading, error, mutate} = useMutation(['create exercise'], (body) => {
        exerciseService.create(body), {
            onSuccess: () => {
                reset()
            }
        }
    })

    const onSubmit = (data) => {
        mutate(data)
    }


    return (
        <>
            <Layout bgImage='/images/home-bg.jpg' heading="Create new exercise" backLink="/new-workout"/>
            <div className="wrapper-inner-page">
                {error && <Alert type="error" text={error}/>}
                {isSuccess && <Alert text='Exercise created'/>}
                {isLoading && <Loader/>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Field
                        error={errors?.name?.message}
                        name='name'
                        register={register}
                        options={{
                            required: 'Name is required'
                        }}
                        type="text" 
                        placeholder="Enter name"

                    />
                    <Field
                        error={errors?.times?.message}
                        name='times'
                        register={register}
                        options={{
                            valueAsNumber: true,
                            validate: value => value > 0 || 'Times must be number',
                            required: 'Times is required'
                        }}
                        placeholder="Enter times"
                    />
                    <Controller
                        name="iconPath"
                        control={control}
                        render={({field: {value, onChange}}) => (
                            <div className={styles.images}>
                                {data.map(name => (
                                    <img 
                                        key={`ex img ${name}`}
                                        src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(name)}`}
                                        alt={name}
                                        className={cn({
                                            [styles.active]: value === getIconPath(name)
                                        })}
                                        onClick={() => onChange(getIconPath(name))}
                                        draggable={false}
                                        height='45'
                                    />
                                ))}
                            </div>
                        )}    
                    />
                    {errors?.iconPath && <div className='error'>{errors?.iconPath?.message}</div>}
                    <Button>Create</Button>
                </form>
            </div>
        </>
    )
}

export default NewExercise