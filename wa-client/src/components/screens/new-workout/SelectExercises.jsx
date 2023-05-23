import { Controller } from "react-hook-form"
import ReactSelect from 'react-select'
import { useListExercises } from "./useListExercises"
import Loader from "../../ui/loader/Loader"

// eslint-disable-next-line react/prop-types
const SelectExercises = ({control}) => {
    const {data, isLoading} = useListExercises()

    if (isLoading) return <Loader/>

    return (
        <Controller
            name="exercisesIds"
            control={control}
            render={({field: {value, onChange}}) => (
                <ReactSelect
                    classNamePrefix='select2-selection'
                    placeholder='Exercises...'
                    title='Exercises'
                    options={data.map(exercise => ({ 
                        value: exercise.id,
                        label: exercise.name
                    }))}
                    value={value}
                    onChange={onChange}
                    isMulti
                />
            )}    
        />
    )
}

export default SelectExercises