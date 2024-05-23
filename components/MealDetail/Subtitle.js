import {Text, View, StyleSheet} from "react-native";

export default function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    fontFamily: 'roboto-bold',
    fontSize: 18,
    textAlign: 'center',
  },
  subtitleContainer: {
    borderBottomWidth: 2,
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4
  }
})