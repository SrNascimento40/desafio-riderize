import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { Icon } from '../../components/Header/styles';
import Map from '../../components/Map';
import NavBar from '../../components/NavBar';
import { ViewButton } from './styles';
import backIcon from '../../../assets/icons/rightArrow.png'
import { SafeAreaView } from 'react-native-safe-area-context';



export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Map
        height='71%'
      />
      <NavBar />
      <ViewButton>
        <TouchableOpacity
          style={styles.genericButton}
          onPress={() => navigation.navigate('Activity')}>
          <Text style={styles.buttonText}>Iniciar atividade</Text>
          <Icon source={backIcon} />
        </TouchableOpacity>
      </ViewButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  genericButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
    width: '100%',
    borderRadius: 100,
    padding: 24,
    backgroundColor: "#0564FF"
  },
  container: {
    flex: 1,
  },
  buttonText: {
    fontFamily: "sans-serif",
    color: "white",
    fontWeight: "400",
    fontsize: 16,
    lineheight: 20,
  }
})