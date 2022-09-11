import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { Icon } from '../../components/Header/styles';
import Map from '../../components/Map';
import NavBar from '../../components/NavBar';
import { ViewButton } from './styles';
import backIcon from '../../../assets/icons/rightArrow.png'



export default function HomeScreen({ navigation }: any) {
  return (
    <>
      <Header />
      <Map 
      height= '71vh'
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
    </>
  );
}

const styles = StyleSheet.create({
  genericButton: {
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    height: 48,
    width: '100%',
    backgroundColor: "#0564FF",
    borderRadius: 100,
    padding: 24
  },
  buttonText: {
    fontFamily: "NeuzeitGro",
    color: "white"
  }
})