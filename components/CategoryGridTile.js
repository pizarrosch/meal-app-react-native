import {View, Pressable, Text, StyleSheet, Platform} from "react-native";

export default function CategoryGridTile({title, color, chooseItem}) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({pressed}) =>
          [styles.button, pressed ? styles.buttonPressed : null]}
        android_ripple={{color: '#ccc'}}
        onPress={chooseItem}
      >
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
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
  buttonPressed: {
    opacity: 0.5
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontFamily: 'roboto-bold'
  }
})