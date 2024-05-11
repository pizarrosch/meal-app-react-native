import {View, Pressable, Text, StyleSheet, Platform} from "react-native";

export default function CategoryGridTile({title, color}) {
  return (
    <View style={styles.gridItem}>
      <Pressable style={styles.button} android_ripple={{color: '#ccc'}}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowColor: 'black',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },
  button: {
    flex: 1
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontFamily: 'roboto-bold'
  }
})