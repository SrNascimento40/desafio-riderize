import React from 'react';
import { View, Button } from 'react-native';


export default function Map({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Map"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}