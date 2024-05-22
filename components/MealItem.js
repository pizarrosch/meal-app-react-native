import {View, Text, Pressable, Image, StyleSheet, Platform} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function MealItem({id, title, imageUrl, duration, complexity, affordability}) {

  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate("Details", {
      mealId: id
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({pressed}) =>
          pressed ? {opacity: 0.5} : null}
        android_ripple={{color: '#ccc'}}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri: imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.35,
    shadowColor: 'black',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontSize: 18,
    fontFamily: 'roboto-bold',
    textAlign: 'center',
    margin: 8
  },
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