import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS,ADD, DELETE } from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: [],
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:const updatedMeals = [...state.meals,action.notes];
    return {...state, meals:updatedMeals }
    case DELETE: 
    // console.log(deleteMeals);
    const Index = state.meals.findIndex(
      meal => meal.id === action.mealId
    );
    const deleteMeals = [...state.meals];
    deleteMeals.splice(Index,1);
    return {...state,meals:deleteMeals}
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    
    default:
      return state;
  }
};

export default mealsReducer;
