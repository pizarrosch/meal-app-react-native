import {CATEGORIES, MEALS} from "../dummy-data/Dummy_data";
import {useLayoutEffect} from "react";
import MealsList from "../components/MealsList/MealsList";

export default function MealsOverviewScreen({route, navigation}) {
  const CatId = route.params.categoryId;
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(CatId) >= 0);

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === CatId).title;

    navigation.setOptions({
      title: categoryTitle
    })
  }, [CatId, navigation]);

  return (
    <MealsList items={displayedMeals}/>
  )
}

