import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecentExpenses from "./screens/RecentExpenses.js";
import ManageExpenses from "./screens/ManageExpenses.js";
import AllExpenses from "./screens/AllExpenses.js";
import { GlobalStyles } from "./constants/styles.js";

const stack = createNativeStackNavigator();
const bottomTabs = createBottomTabNavigator();

export default function App() {
  const ExpenseOverview = () => {
    return (
      <bottomTabs.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          headerTintColor: "white",
          tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          tabBarActiveTintColor: GlobalStyles.colors.accent500,
        }}
      >
        <bottomTabs.Screen name="AllExpenses" component={AllExpenses} />
        <bottomTabs.Screen name="RecentExpenses" component={RecentExpenses} />
      </bottomTabs.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="ExpenseOverview">
        <stack.Screen name="ManageExpenses" component={ManageExpenses} />
        <stack.Screen
          name="ExpenseOverview"
          component={ExpenseOverview}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
