import React  from 'react';
import { View, StyleSheet,TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Meal from '../models/meal';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { useState } from 'react';
import {insertNote, fetchNotes} from '../helpers/db'
import { addNote } from '../store/actions/meals';

const CategoryMealScreen = props => {
//   const catId = props.navigation.getParam('categoryId');
// console.log(props);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch()
 const inputHandler = () =>{
  const d = new Date();
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const date=  months[d.getMonth()];
  const today =  new Date().getMonth() + 1;
 
  const completeDate = date + "" + today;
   const Note = new Meal(
    date,
    title,
    description,
    date,
    '#ffc7ff'
  )
   dispatch(addNote(Note))
  // insertNote(title,description, date);
  // navigation.navigate("Categories");
  props.navigation.navigate("Categories");
  // console.log("called");
  // fetchNotes()
 }

 
    return (
      <View style={styles.form}>
        <TextInput style={styles.title} placeholder="Title Here..." value={title} size={22} onChangeText={text => setTitle(text)}
        />
        <TextInput style={styles.description} placeholder="Enter Description"
        value={description}
        onChangeText={text => setDescription(text)}
         numberOfLines={3}/>
        <Button
  onPress={inputHandler}
  title="Submit"
  color="#841584"
  style={styles.button}
/>
        {/* <DefaultText>No meals found, maybe check your filters?</DefaultText> */}
      </View>
    );
  

  // return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = navigationData => {
  // const catId = navigationData.navigation.getParam('categoryId');

  // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: 'Add Note',
    // headerRight: (
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
        
    //      <Item
    //       title="Add"
    //       iconName={'ios-checkmark-circle-outline' }
          
    //       onPress={inputHandler}
    //     />
    //   </HeaderButtons>
    // )
  };
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding:15,
marginTop:20
  },
  title:{
    fontSize:22,
    
  },
  description:{
marginTop:10,
fontSize:18
  },
  button:{
    marginTop:10
  }
});

export default CategoryMealScreen;
