import {View, Text, StyleSheet, FlatList} from "react-native";
import {CATEGORIES, MEALS} from "../dummy-data/Dummy_data";
import MealItem from "../components/MealItem";
import category from "../models/category";
import {useLayoutEffect} from "react";

export default function MealsOverviewScreen({route, navigation}) {
  const CatId = route.params.categoryId;
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(CatId) >= 0);

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === CatId).title;

    navigation.setOptions({
      title: categoryTitle
    })
  }, [CatId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      duration: item.duration,
      complexity: item.complexity
    }

    return <MealItem {...mealProps} />
  }

  return (
    <View>
      <FlatList data={displayedMeals} renderItem={renderMealItem} keyExtractor={item => item.id}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})