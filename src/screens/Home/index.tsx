import React from 'react';
import { View, Button } from 'react-native';
import ButtonControl from '../../components/ButtonControl';
import Header from '../../components/Header';
import Map from '../../components/Map';
import NavBar from '../../components/NavBar';


export default function HomeScreen({ navigation }: any) {
  return (
    <>
      <Header />
      <Map />
      <NavBar />
      <ButtonControl />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Activity"
          onPress={() => navigation.navigate('Activity')}
        />
      </View>
    </>
  );
}