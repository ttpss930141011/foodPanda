import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      {/* <StatusBar hidden={true} /> */}
      <Text className="text-red-500">
        {/* Header */}
        <View>
          <Image source={{ uri: 'https://links.papareact.com/wru' }} className="h-7 w-7 bg-gray-300 p-4 rounded-full" />
        </View>
        <View>
          <Text className="text-xs text-gray-400 font-bold">Deliver Now!</Text>
          <Text className="text-xl font-bold">Current Location</Text>
        </View>
      </Text>
    </SafeAreaView>
  );
}
