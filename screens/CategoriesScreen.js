import {FlatList} from "react-native";
import {CATEGORIES} from "../dummy-data/Dummy_data";

function renderCategoryItem(item) {

}

export default function CategoriesScreen() {
  return (
    <FlatList data={CATEGORIES} renderItem={} keyExtractor={(item) => item.id}/>
  )
}