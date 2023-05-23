import { useQuery } from "@tanstack/react-query";
import exerciseService from "../../../services/exercise/exercise.service";

export const useListExercises = () => useQuery([`list exercises`], () => exerciseService.getAll(), {select: ({data}) => data})