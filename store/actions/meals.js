import { Title } from "react-native-paper";
import Meal from '../../models/meal';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';
export const ADD = 'ADD';
export const DELETE='DELETE';

export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, mealId: id };
};
export const deleteNote = (id) => {
    return { type: DELETE, mealId: id };
};

export const setFilters = filterSettings => {
    return { type: SET_FILTERS, filters: filterSettings };
};
export const addNote = (note) =>{
    
    return {type:ADD, notes:note}
}