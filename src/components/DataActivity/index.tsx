import React from 'react';
import { View, Button } from 'react-native';


export default function DataActivity({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="DataActivity"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}