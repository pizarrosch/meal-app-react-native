import {View, Text, StyleSheet} from "react-native";
import {MEALS} from "../dummy-data/Dummy_data";

export default function MealsOverviewScreen({route}) {
  const CatId = route.params.categoryId;

  return (
    <View>
      <Text>{CatId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})