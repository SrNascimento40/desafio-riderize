import React from 'react';
import { ViewNav } from './styles'
import routeIcon from '../../../assets/icons/route.png'
import bikeIcon from '../../../assets/icons/bike.png'
import mountainIcon from '../../../assets/icons/Mountain.png'
import cameraIcon from '../../../assets/icons/camera.png'
import { Image, StyleSheet } from 'react-native';

export default function NavBar({ navigation }: any) {
  return (

    <ViewNav>
      <Image style={styles.iconNav} source={routeIcon} />
      <Image style={styles.iconNav} source={bikeIcon} />
      <Image style={styles.iconNav} source={mountainIcon} />
      <Image style={styles.iconNav} source={cameraIcon} />
    </ViewNav>
  );
}

const styles = StyleSheet.create({
  iconNav: {
    height: 21,
    width: 21,
    resizeMode: 'contain'
  }
})