import React from 'react';
import { Image, View } from 'react-native';
import fakeMap from '../../../assets/fakeMap.png'

interface iMap {
  height: string
}

export default function Map(props:iMap) {
  return (
    <View>
      <Image style={{ width: '100%', height:props.height }} source={fakeMap} />
    </View>
  );
}
