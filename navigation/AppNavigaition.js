import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import Cards from "../cardScreen/Cards";
import BoardingPage1 from "../screens/BoardingPage1";
import BoardingPage2 from "../screens/BoardingPage2";
import BoardingPage3 from "../screens/BoardingPage3";
import BoardingPage4 from "../screens/BoardingPage4";
import CarDetails from "../cardScreen/CarDetails";

const Stack = createStackNavigator();

const AppNavigaition = ({ navigation }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="BoardingPage1" component={BoardingPage1} />
                <Stack.Screen name="BoardingPage2" component={BoardingPage2} />
                <Stack.Screen name="BoardingPage3" component={BoardingPage3} />
                <Stack.Screen name="BoardingPage4" component={BoardingPage4} />
                <Stack.Screen name="Cards" component={Cards} />
                <Stack.Screen name="CarDetails" component={CarDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigaition;
