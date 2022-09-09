import React from 'react';
import { View } from 'react-native';
import { MapImage } from './styles';
import fakeMap from '../../../assets/fakeMap.png'


export default function Map({ navigation }: any) {
  return (
    <View>
      <MapImage src={fakeMap} />
    </View>
  );
}