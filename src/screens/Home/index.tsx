import React from 'react';
import { View, Text, Button } from 'react-native';


export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Activity"
        onPress={() => navigation.navigate('Activity')}
      />
    </View>
  );
}