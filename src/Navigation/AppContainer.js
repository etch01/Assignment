import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { MainNavStack } from './MainNavigation';


const AppContainer = () => {
  
    return (
      
        <NavigationContainer>
                <MainNavStack />
         </NavigationContainer >
    )
}


export default AppContainer