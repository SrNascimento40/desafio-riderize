import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import CardDataActivity from '../../components/CardDataActivity';
import Header from '../../components/Header';
import Map from '../../components/Map';
import { ViewButton } from './styles';


export default function ActivityScreen({ navigation }: any) {
  return (
    <>
      <Header />
      <Map 
      height='40vh'
      />
      <CardDataActivity />
      <ViewButton>
        <TouchableOpacity
          style={styles.genericButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Parar</Text>
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
    justifyContent:'center',
    height: 48,
    width: '100%',
    backgroundColor: "white",
    borderRadius: 100,
    padding: 24,
    border: '1px solid',
    color: "#FF2525"
  },
  buttonText: {
    fontFamily: "NeuzeitGro",
    color: "#FF2525"
  }
})