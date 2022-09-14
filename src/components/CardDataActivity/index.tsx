import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { useFocusEffect } from '@react-navigation/native';
import { CardView, PlaceText, ViewData } from './styles';
import Distance from '../Distance';
import { useStopwatch } from 'react-timer-hook';


interface iActivity {
  startAll: boolean;
  stopAll: boolean;
  resetAll: boolean;
}

export default function CardDataActivity(props: iActivity) {
  const [location, setLocation] = useState<any>();
  const [errorMsg, setErrorMsg] = useState('');
  const [cityActual, setCityActual] = useState('');
  const [speedAverage, setSpeedAverage] = useState(Number);
  const speedArray: number[] = []


  useFocusEffect(React.useCallback(() => {
    (async function () {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      while (props.stopAll === false) {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);

        const adress = await Location.reverseGeocodeAsync({ longitude: location.coords.longitude, latitude: location.coords.latitude })
        setCityActual(!location ? 'Waiting' : JSON.stringify(adress[0]["subregion"]));

        speedArray.push(Number(Number(location.coords.speed).toPrecision(2)))

        let speedAverage: number = 0
        for (let i = 0; i < speedArray.length; i++) {
          speedAverage = speedArray[i] + speedAverage
          if (i == (speedArray.length) - 1) {
            setSpeedAverage(speedAverage / (i + 1))
          }
        }
      }
    })();
  }, []));

  const distance = Distance(props.startAll, props.resetAll)

  const {
    seconds,
    minutes,
    hours,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true })


  // startAll={start}
  // stopAll={stop}
  // resetAll={reset}

  if (props.startAll==true) {
    {() => start}
  } else if (props.stopAll==true) {
    {() => pause}
  }else if (props.resetAll==true) {
    {() => reset}
  }
  
  return (
    <CardView>
      <PlaceText style={{ paddingBottom: 7, paddingTop: 20 }}>Você está pedalando em:</PlaceText>
      <PlaceText style={{ fontWeight: 'bolder', paddingBottom: 10 }}>{cityActual.substring(1, cityActual.length-1)}</PlaceText>
      <Text style={styles.describeText}>tempo</Text>
      <Text style={{ fontFamily: 'sans-serif', lineHeight: 72, fontSize: 64, fontWeight: '900', paddingBottom: 10 }}>{hours > 9? hours : '0' + hours}:{minutes > 9? minutes : '0' + minutes}:{seconds > 9? seconds : '0' + seconds}</Text>
      <ViewData>
        <CardView >
          <Text style={{ ...styles.describeText, fontSize: 18, lineHeight: 26 }}>distância</Text>
          <Text style={styles.functionalText}>{distance}km</Text>
        </CardView>
        <CardView>
          <Text style={{ ...styles.describeText, fontSize: 18, lineHeight: 26 }}>velocidade (km/h)</Text>
          <Text style={styles.functionalText}>{(speedAverage).toFixed(1)}km/h</Text>
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