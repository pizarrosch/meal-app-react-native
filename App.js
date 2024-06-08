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
import {Ionicons} from "@expo/vector-icons";
import {Provider} from "react-redux";
import {store} from "./store/redux/store";
// import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      drawerActiveBackgroundColor: '#D0B090',
      drawerActiveTintColor: '#5E4123',
      drawerInactiveTintColor: '#DCE0E5',
      headerStyle: {
        backgroundColor: '#5E4123'
      },
      drawerContentStyle: {
        backgroundColor: '#5E4123'
      },
      headerTintColor: '#DCE0E5',
      sceneContainerStyle: {
        backgroundColor: '#D0B090'
      }
    }}>
      <Drawer.Screen name="CategoriesScreen" component={CategoriesScreen} options={{
        title: 'All Categories',
        drawerIcon: ({color, size}) => <Ionicons name='book' color={color} size={size}/>
      }}/>
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size}/>
        }}
      />
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
      {/*<FavoritesContextProvider>*/}
      <Provider store={store}>
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
      </Provider>
      {/*</FavoritesContextProvider>*/}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
