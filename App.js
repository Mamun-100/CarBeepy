import React from 'react';
import { View } from 'react-native'
import {NavigationContainer } from "@react-navigation/native";
import {createStackNavigator } from "@react-navigation/stack";

import BoardingPage1 from './boarding/BoardingPage1';
import BoardingPage2 from './boarding/BoardingPage2';
import BoardingPage3 from './boarding/BoardingPage3';
import BoardingPage4 from './boarding/BoardingPage4';
import SportCar from './boarding/SportCar';
import Motorhome from './boarding/Motorhome'
import Cards from './boarding/Cards';
import CarDetails from './boarding/CarDetails'

const Stack = createStackNavigator();

export default function App({navigation}) {


  return (
   

    <NavigationContainer>
      <Stack.Navigator initialRouteName="BoardingPage1" screenOptions={{headerShown: false}}>
        <Stack.Screen name="BoardingPage1" component={BoardingPage1} />
        <Stack.Screen name="BoardingPage2" component={BoardingPage2} />
        <Stack.Screen name="BoardingPage3" component={BoardingPage3} />
        <Stack.Screen name="BoardingPage4" component={BoardingPage4} />
        <Stack.Screen name="Cards" component={Cards} />
        <Stack.Screen name="CarDetails" component={CarDetails}/>

       {/* <Stack.Screen name="CarCards" component={CarCards} /> 
        <Stack.Screen name="SportCar" component={SportCar} />
        <Stack.Screen name="Motorhome" component={Motorhome} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


