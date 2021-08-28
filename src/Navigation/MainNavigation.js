import React from 'react';
import { I18nManager, View, StyleSheet, Platform } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../Screens/Home';
import MovieDetails from '../Screens/MovieDetails';

const MainNav = createStackNavigator();


export const MainNavStack = (props) => {
  return (

    <MainNav.Navigator headerShown={false}>
      <MainNav.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <MainNav.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{
          headerShown: false,
        }}
      />
    </MainNav.Navigator>
  );
}