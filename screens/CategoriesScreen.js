import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { FloatingAction } from "react-native-floating-action";
import HeaderButton from '../components/HeaderButton';
// import { CATEGORIES, MEALS } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

import {useSelector, useDispatch} from 'react-redux'


const CategoriesScreen = props => {
  const MEALS = useSelector(state => state.meals.meals);
  
  // rconsole.log(favMeals);
  const renderGridItem = itemData => {
    return  (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        description={itemData.item.description}
        date={itemData.item.date}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id,
              title:itemData.item.title,
             
            }
          });
        }}
      />
    );
  };

  return (<View>
    <View>
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={MEALS}
      renderItem={renderGridItem}
      numColumns={2}
    />
    </View>
    <FloatingAction
  ref={(ref) => { this.floatingAction = ref; }}
  position='center'
  onPressMain={() => {
    props.navigation.navigate({
      routeName: 'CategoryMeals',
      // params: {
      //   mealId: itemData.item.id,
      //   title:itemData.item.title
      // }
    });
  }}
/>
  </View>
  );
};

CategoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Notes',
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
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;
