import React from 'react';
import { ViewNav, IconNav,  } from './styles'
import routeIcon from '../../../assets/icons/route.png'
import bikeIcon from '../../../assets/icons/bike.png'
import mountainIcon from '../../../assets/icons/Mountain.png'
import cameraIcon from '../../../assets/icons/camera.png'

export default function NavBar({ navigation }: any) {
  return (

    <ViewNav>
      <IconNav source={routeIcon} />
      <IconNav source={bikeIcon} />
      <IconNav source={mountainIcon} />
      <IconNav source={cameraIcon} />
    </ViewNav>
  );
}