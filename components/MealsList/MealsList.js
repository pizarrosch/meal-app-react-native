import MealItem from "./MealItem";
import {FlatList, StyleSheet, View} from "react-native";
import {MEALS} from "../../dummy-data/Dummy_data";

export default function MealsList({items}) {

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealProps = {
      id: item.id,
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
      <FlatList data={items} renderItem={renderMealItem} keyExtractor={item => item.id}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})