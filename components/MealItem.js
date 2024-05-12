import {View, Text, Pressable, Image, StyleSheet} from "react-native";

export default function MealItem({title, imageUrl}) {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{uri: imageUrl}} style={styles.image}/>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontSize: 18,
    fontFamily: 'roboto-bold',
    textAlign: 'center'
  }
})