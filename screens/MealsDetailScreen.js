import {View, Text, Image, StyleSheet} from "react-native";
import {MEALS} from "../dummy-data/Dummy_data";
import MealParameters from "../components/MealParameters";
import Subtitle from "../components/MealDetail/Subtitle";

export default function MealsDetailScreen({route}) {
  const catId = route.params.mealId;
  const selectedMeals = MEALS.find(meals => meals.id === catId);

  return (
    <View>
      <Image style={styles.image} source={{uri: selectedMeals.imageUrl}}/>
      <Text style={styles.title}>{selectedMeals.title}</Text>
      <View>
        <MealParameters duration={selectedMeals.duration} complexity={selectedMeals.complexity}
                        affordability={selectedMeals.affordability}/>
      </View>
      <Subtitle>Ingredients</Subtitle>
      {selectedMeals.ingredients.map(ingredient => <Text key={ingredient}>{ingredient}</Text>)}
      <Subtitle>Steps</Subtitle>
      {selectedMeals.steps.map(step => <Text key={step}>{step}</Text>)}
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350
  },
  title: {
    fontFamily: 'roboto-bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center'
  },
})