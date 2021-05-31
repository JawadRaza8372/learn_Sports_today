import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from "./screens/WelcomeScreen";
import Splashscreen from "./screens/Splashscreen"
import FrequencyScreen from "./screens/FrequencyScreen"
import TimePickScreen from "./screens/TimePickScreen"




const Stack = createStackNavigator();

function NavigtionTrail() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splashscreen} options={{headerShown: false}} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
          <Stack.Screen name="Welcome1" component={FrequencyScreen} options={{headerShown: false}} />
          <Stack.Screen name="Welcome2" component={TimePickScreen} options={{headerShown: false}} />

        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default NavigtionTrail
