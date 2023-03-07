import React from 'react';
import { withExpoSnack } from 'nativewind';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StatusBar } from 'react-native';
import { styled } from 'nativewind';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
const StyledView = styled(View);
const StyledText = styled(Text);

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
// export default withExpoSnack(App);
