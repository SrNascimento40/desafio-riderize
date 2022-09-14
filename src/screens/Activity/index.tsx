import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardDataActivity from '../../components/CardDataActivity';
import Header from '../../components/Header';
import Map from '../../components/Map';
import { ViewButton } from './styles';


export default function ActivityScreen({ navigation }: any) {
  const [menu, setMenu] = useState(0)
  const [start, setStart] = useState(true)
  const [stop, setStop] = useState(false)
  const [reset, setReset] = useState(false)
  if (menu == 0) {
    const start = true
    const stop = false
    const reset = false
  } else if (menu == 1) {
    const start = false
    const stop = true
    const reset = false
  } else {
    const start = false
    const stop = false
    const reset = true
    setMenu(-1)
  }

  return (
    <SafeAreaView>
      <Header />
      <Map
        height='40%'
      />
      <CardDataActivity
        startAll={start}
        stopAll={stop}
        resetAll={reset}
      />
      <ViewButton>
        <TouchableOpacity
          style={styles.genericButton}
          onPress={() => { navigation.navigate('Home'), setMenu(menu+1)}}>
          <Text style={styles.buttonText}>Parar</Text>
        </TouchableOpacity>
      </ViewButton>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  genericButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: '100%',
    borderRadius: 100,
    backgroundColor: "white",
    border: '1px solid',
    color: "#FF2525"
  },
  container: {
    flex: 1,
  },
  buttonText: {
    fontFamily: "sans-serif",
    color: "#FF2525"
  }
})