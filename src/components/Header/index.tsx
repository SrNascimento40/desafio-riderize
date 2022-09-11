import React from 'react';
import { ViewHeader, Icon, Title } from './styles'
import backIcon from '../../../assets/icons/leftArrow.png'
import configIcon from '../../../assets/icons/config.png'

export default function Header({ navigation }: any) {
  return (
    <ViewHeader>
      <Icon source={backIcon} />
      <Title>Pedalada</Title>
      <Icon source={configIcon} />
    </ViewHeader>
  );
}