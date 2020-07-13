import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Alert, TextInput } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import { setFilters } from '../store/actions/meals';



const FiltersScreen = props => {
  const { navigation } = props;
  
  const [Pin, setPin] = useState(null)
  const [Error, setError] = useState(null)
  const submitHandler = ()=>{
    
    if(Pin==1234){
     
      Alert.alert(
        'PIN',
        'Pin is correct you can proceed',
        [
          
          
          { text: 'OK', onPress: () => props.navigation.navigate("Categories") }
        ],
        { cancelable: false }
      );
    }
    else {
      setError("Pin is incorrect")
    }
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Enter Pin</Text>
      <TextInput style={styles.input} keyboardType="numeric" placeholder="Enter Pin" value={Pin}
      onChangeText={text => setPin(text)}
      onSubmitEditing={submitHandler}
      
      secureTextEntry={true} maxLength={4}/>
       <Text style={styles.Error}>{Error}</Text>
      
      
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Pin',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    // headerRight: (
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item
    //       title="Save"
    //       iconName="ios-save"
    //       onPress={navData.navigation.getParam('save')}
    //     />
    //   </HeaderButtons>
    // )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
 Error:{
   color:"red"
 },
 input:{
   width:100,
   textAlign:"center"
 }
});

export default FiltersScreen;
