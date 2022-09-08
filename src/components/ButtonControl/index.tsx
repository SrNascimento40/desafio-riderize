import React from 'react';
import { View, Button } from 'react-native';


export default function ButtonControl({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Button"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}