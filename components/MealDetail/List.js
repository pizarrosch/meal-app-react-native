import {Text, View, StyleSheet} from "react-native";

export default function List({data}) {
  return (
    data.map(dataItem => (
      <View style={styles.listItem} key={dataItem}>
        <Text style={styles.textItem}>{dataItem}</Text>
      </View>
    ))
  )
}

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 4,
    marginHorizontal: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: '#7A542E',
  },
  textItem: {
    textAlign: 'center'
  }
})