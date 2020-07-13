import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Platform
} from 'react-native';

import DefaultText from './DefaultText';

const MealItem = props => {
  return (
    <View
          style={{ ...styles.container, ...styles.gridItem }}
        >
      <TouchableOpacity onPress={props.onSelectMeal}>
     
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
          <Text>  {props.description} </Text>
          <Text style={styles.date}>  {props.date} </Text>
       
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 
  gridItem: {
    flex: 1,
    margin: 15,
    // height: 200,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5,
    backgroundColor:"#368dff"
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    // justifyContent: 'flex-end',
    //alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    //textAlign: 'right'
  },
  date:{
    alignSelf:"flex-end",
    // color:'#ccc'
  }
});

export default MealItem;
