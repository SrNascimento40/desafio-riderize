import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { CardDiv, PlaceText, DivData } from './styles';


export default function CardDataActivity({ navigation }: any) {
  return (
    <CardDiv >
      <PlaceText style={{ paddingBottom: 7, paddingTop: 20 }}>Você está pedalando em:</PlaceText>
      <PlaceText style={{ fontWeight: 'bolder', paddingBottom: 10 }}>Rio do sul</PlaceText>
      <Text style={styles.describeText}>tempo</Text>
      <Text style={styles.functionalText}>00:00:02</Text>
      <DivData>
        <CardDiv >
          <Text style={{...styles.describeText, fontSize:18, lineHeight: 26}}>distância</Text>
          <Text style={{...styles.functionalText, fontSize:32, lineHeight: 40}}>10km/h</Text>
        </CardDiv>
        <CardDiv>
          <Text style={{...styles.describeText, fontSize:18, lineHeight: 26}}>velocidade (km/h)</Text>
          <Text style={{...styles.functionalText, fontSize:32, lineHeight: 40}}>31.1</Text>
        </CardDiv>
      </DivData>
    </CardDiv>
  );
}

const styles = StyleSheet.create({
  describeText: {
    fontFamily: 'NeuzeitGro',
    fontSize: 24,
    fontWeight: '400',
    paddingVertical: 16
  },
  functionalText: {
    fontFamily: 'Neuzeit Grotesk',
    lineHeight: 72,
    fontSize: 64,
    fontWeight: '900',
    paddingBottom: 10
  }
})