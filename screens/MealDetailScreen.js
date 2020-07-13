import React, { useEffect, useCallback } from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { toggleFavorite , deleteNote } from '../store/actions/meals';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = props => {
  const availableMeals = useSelector(state => state.meals.meals);
  const mealId = props.navigation.getParam('mealId');
  const currentMealIsFavorite = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId)
  );
 const selectedMeal = availableMeals.find(meal => meal.id === mealId);
 const dispatch = useDispatch();
 const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);
  
  const deleteHandler = useCallback(() => {
    dispatch(deleteNote(mealId)); 
    
  }, [dispatch, mealId]);
  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler,]);
  
  useEffect(() => {
     props.navigation.setParams({deleteNotes: deleteHandler})
    
  }, [deleteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFavorite });
  }, [currentMealIsFavorite]);
  if(selectedMeal){
    return (
      <View style={styles.details}>
       
        <Text style={styles.date}>
         {selectedMeal.date}
        </Text>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        
        <Text style={styles.description}>{selectedMeal.description}</Text>
        
      </View>
    );
  } else {
return (props.navigation.goBack())
    }
};

MealDetailScreen.navigationOptions = navigationData => {
  // const mealId = navigationData.navigation.getParam('mealId');
  const mealTitle = navigationData.navigation.getParam('title');
  const toggleFavorite = navigationData.navigation.getParam('toggleFav');
  const isFavorite = navigationData.navigation.getParam('isFav');
  const deleteNote = navigationData.navigation.getParam('deleteNotes');
  // const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Pin"
          iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
          onPress={toggleFavorite}
        />
         <Item
          title="Delete"
          iconName={'ios-trash' }
          onPress={deleteNote}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  
  details: {
   marginVertical:15,
    padding: 25,
    justifyContent: 'space-around'
  },
  date:{
    color:"#ccc",
    marginVertical:5
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    marginVertical:20
    // textAlign: 'center'
  },
  
});

export default MealDetailScreen;
