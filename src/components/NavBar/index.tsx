import React from 'react';
import { View, Button } from 'react-native';


export default function NavBar({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="NavBar"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}