import {View, Text} from "react-native";

export default function MealsDetailScreen({route}) {
  const catId = route.params.mealId;
  return (
    <View>
      <Text>This is a detail for {catId}</Text>
    </View>
  )
}