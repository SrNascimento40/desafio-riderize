import React, { useState } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { useFocusEffect } from '@react-navigation/native';

interface iMap {
  height: string
}

export default function Map(props: iMap) {
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const [origin, setOrigin] = useState<any>();

  useFocusEffect(React.useCallback(() => {
    (async function () {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setOrigin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 1,
        longitudeDelta: 1,
      })
    })();
  }, []));

  
  return (
    <View style={{ width: '100%', height: props.height }}>
      <MapView style={{ width: '100%', height: '100%' }}
        region={origin}
        showsUserLocation={true}
        showsMyLocationButton={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
        zoomTapEnabled={true} />
    </View>
  );
}