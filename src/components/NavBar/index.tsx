import React from 'react';
import { DivNav, IconNav,  } from './styles'
import routeIcon from '../../../assets/icons/route.png'
import bikeIcon from '../../../assets/icons/bike.png'
import mountainIcon from '../../../assets/icons/Mountain.png'
import cameraIcon from '../../../assets/icons/camera.png'

export default function NavBar({ navigation }: any) {
  return (

    <DivNav>
      <IconNav src={routeIcon} />
      <IconNav src={bikeIcon} />
      <IconNav src={mountainIcon} />
      <IconNav src={cameraIcon} />
    </DivNav>
  );
}