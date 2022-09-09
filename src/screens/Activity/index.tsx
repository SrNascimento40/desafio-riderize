import React from 'react';
import { View, Button } from 'react-native';
import Header from '../../components/Header';


export default function ActivityScreen({ navigation }: any) {
  return (
    <>
      <Header />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </>
  );
}