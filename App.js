import {StatusBar, StyleSheet, Text} from 'react-native';
import {useFonts} from "expo-font";
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import 'react-native-reanimated';
import MealsDetailScreen from "./screens/MealsDetailScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      drawerActiveBackgroundColor: '#D0B090',
      drawerActiveTintColor: '#2F343C',
      headerStyle: {
        backgroundColor: '#7A542E'
      },
      headerTintColor: '#DCE0E5',
      sceneContainerStyle: {
        backgroundColor: '#D0B090'
      }
    }}>
      <Drawer.Screen name="CategoriesScreen" component={CategoriesScreen} options={{
        title: 'All Categories',
      }}/>
      <Drawer.Screen name="Favorites" component={FavoritesScreen}/>
    </Drawer.Navigator>
  )
}

export default function App() {

  useFonts({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })

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
          }
        }}>
          <Stack.Screen
            name="Categories"
            component={DrawerNavigator}
            options={{
              headerShown: false
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
          <Stack.Screen name="Details" component={MealsDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
