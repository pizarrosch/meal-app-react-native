import { StyleSheet } from 'react-native';
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {

  const [fontIsLoaded] = useFonts({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })

  if (!fontIsLoaded) {
    return <AppLoading />
  }

  return (
    <CategoriesScreen />
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
