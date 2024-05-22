import {StatusBar, StyleSheet} from 'react-native';
import {useFonts} from "expo-font";
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import 'react-native-reanimated';
import MealsDetailScreen from "./screens/MealsDetailScreen";

export default function App() {

  useFonts({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })

  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar barStyle='dark-content'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#7A542E'
          },
          headerTintColor: '#DCE0E5',
          contentStyle: {
            backgroundColor: '#D0B090'
        }}}>
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories'
            }}
          />
          <Stack.Screen
            name="Overview"
            component={MealsOverviewScreen}
            // options={({route}) => {
            // const CatId = route.params.categoryId;
            // return {
            //   title: CatId
            // }}}

          />
          <Stack.Screen name="Details" component={MealsDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
