import {FlatList} from "react-native";
import {CATEGORIES} from "../dummy-data/Dummy_data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({navigation}) {

  function renderCategoryItem(itemData) {

    function pressHandler() {
      navigation.navigate('Overview', {
        categoryId: itemData.item.id
      });
    }

    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} chooseItem={pressHandler}/>
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  )
}