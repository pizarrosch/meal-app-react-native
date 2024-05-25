import {View, Text, Image, StyleSheet, ScrollView, Button} from "react-native";
import {MEALS} from "../dummy-data/Dummy_data";
import MealParameters from "../components/MealParameters";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import {useLayoutEffect} from "react";

export default function MealsDetailScreen({route, navigation}) {
  const catId = route.params.mealId;
  const selectedMeals = MEALS.find(meals => meals.id === catId);

  function pressHeaderButton() {
    console.log('Tapped!')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title='Tap me' onPress={pressHeaderButton}/>
    })
  }, [navigation, pressHeaderButton]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{uri: selectedMeals.imageUrl}}/>
      <Text style={styles.title}>{selectedMeals.title}</Text>
      <View>
        <MealParameters duration={selectedMeals.duration} complexity={selectedMeals.complexity}
                        affordability={selectedMeals.affordability} />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeals.ingredients}/>
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeals.steps}/>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
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
  listOuterContainer: {
    alignItems: 'center'
  },
  listContainer: {
    width: '80%'
  }
})