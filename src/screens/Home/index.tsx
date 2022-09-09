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
      <ButtonControl
        navigation: any
        title: string
        backgroundColor: string
        textColor: string />
    </>
  );
}