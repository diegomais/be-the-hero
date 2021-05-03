import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { registerRootComponent } from 'expo';
import React from 'react';

import { DETAILS, INCIDENTS } from './config/routes';
import Incidents from './screens/Incidents';
import Details from './screens/Details';

const AppStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName={INCIDENTS}
        screenOptions={{ headerShown: false }}
      >
        <AppStack.Screen name={INCIDENTS} component={Incidents} />
        <AppStack.Screen name={DETAILS} component={Details} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
