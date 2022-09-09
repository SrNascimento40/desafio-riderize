import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DivButton } from './styles';
import backIcon from '../../../assets/icons/rightArrow.png'
import { Icon } from '../Header/styles';

interface iButtonProps {
  navigation: any;
  title: string;
  backgroundColor: string;
  textColor: string;
}

export default function ButtonControl(props: iButtonProps) {
  return (
    <DivButton>
      <TouchableOpacity
        style={[styles.genericButton, { backgroundColor: props.backgroundColor }]}
        onPress={() => props.navigation.navigate('Home')}>
        <Text style={[styles.buttonText, { color: props.textColor }]}>{props.title}</Text>
        <Icon src={backIcon} />
      </TouchableOpacity>
    </DivButton>
  );
}

const styles = StyleSheet.create({
  genericButton: {
    height: 48,
    width: '100%',
  },
  buttonText: {
    fontFamily: "NeuzeitGro"
  }
})