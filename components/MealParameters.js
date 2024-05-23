import {Text, View, StyleSheet} from "react-native";

export default function MealParameters({duration, complexity, affordability}) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration}m</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailItem: {
    marginHorizontal: 6,
    fontSize: 12
  }
})