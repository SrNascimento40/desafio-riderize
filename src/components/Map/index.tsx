import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';


interface iMap {
  height: string
}


export default function Map(props: iMap) {
  return (
    <View>
      <MapView style={{ width: '100%', height: props.height }}
        region={{
          latitude: 40.567,
          longitude: -25.983,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1 }}
          />
    </View>
  );
}
