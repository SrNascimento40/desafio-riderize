import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import Crono from '../Crono';
import * as Location from 'expo-location';
import { useFocusEffect } from '@react-navigation/native';
import { CardView, PlaceText, ViewData } from './styles';


export default function CardDataActivity({ navigation }: any) {
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const [cityActual, setCityActual] = useState('');

  useFocusEffect(React.useCallback(() => {
    (async function () {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      const adress = await Location.reverseGeocodeAsync({ longitude: location.coords.longitude, latitude: location.coords.latitude })
      setCityActual(!location ? 'Waiting' : JSON.stringify(adress[0]["subregion"]));
      
    })();
  }, []));

  return (
    <CardView>
      <PlaceText style={{ paddingBottom: 7, paddingTop: 20 }}>Você está pedalando em:</PlaceText>
      <PlaceText style={{ fontWeight: 'bolder', paddingBottom: 10 }}>{cityActual}</PlaceText>
      <Text style={styles.describeText}>tempo</Text>
      <Crono />
      <ViewData>
        <CardView >
          <Text style={{ ...styles.describeText, fontSize: 18, lineHeight: 26 }}>distância</Text>
          <Text style={styles.functionalText}>10km/h</Text>
        </CardView>
        <CardView>
          <Text style={{ ...styles.describeText, fontSize: 18, lineHeight: 26 }}>velocidade (km/h)</Text>
          <Text style={styles.functionalText}>31.1</Text>
        </CardView>
      </ViewData>
    </CardView>
  );
}

const styles = StyleSheet.create({
  describeText: {
    fontFamily: 'sans-serif',
    fontSize: 24,
    fontWeight: '400',
    paddingVertical: 16
  },
  functionalText: {
    fontFamily: 'sans-serif',
    lineHeight: 40,
    fontSize: 32,
    fontWeight: '900',
    paddingBottom: 10
  }
})