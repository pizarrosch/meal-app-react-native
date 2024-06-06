import {useContext} from "react";
import {FavoritesContext} from "../store/context/favorites-context";
import {MEALS} from "../dummy-data/Dummy_data";
import MealsList from "../components/MealsList/MealsList";
import {StyleSheet, View, Text} from "react-native";

export default function FavoritesScreen() {

  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
        <View style={styles.rootContainer}>
          <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
        </View>
      );
  }

  return (
    <MealsList items={favoriteMeals}/>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontFamily: 'roboto-bold',
    color: '#7A542E'
  }
})