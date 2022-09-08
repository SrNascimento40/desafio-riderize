import React from 'react';
import { View, Button } from 'react-native';
import { DivHeader, Icon, Title } from './styles'
import backIcon from '../../../assets/icons/leftArrow.png'
import configIcon from '../../../assets/icons/config.png'

export default function Header({ navigation }: any) {
  return (
    <DivHeader>
      <Icon src={backIcon} />
      <Title>Pedalada</Title>
      <Icon src={configIcon} />
    </DivHeader>
  );
}