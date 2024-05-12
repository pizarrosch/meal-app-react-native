import {View, Text, StyleSheet, FlatList} from "react-native";
import {MEALS} from "../dummy-data/Dummy_data";
import MealItem from "../components/MealItem";

export default function MealsOverviewScreen({route}) {
  const CatId = route.params.categoryId;
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(CatId) >= 0);

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />
  }

  return (
    <View>
      <FlatList data={displayedMeals} renderItem={renderMealItem} keyExtractor={item => item.id} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})