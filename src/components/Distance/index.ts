import React, { useState } from 'react';
import * as Location from 'expo-location';
import { useFocusEffect } from '@react-navigation/native';
import { getDistance } from 'geolib';


export default function Distance<Number>(started:boolean, reset:boolean) {
    const [location, setLocation] = useState<any>();
    const [errorMsg, setErrorMsg] = useState('');
    const [distance, setDistance] = useState(Number);
    const coordsArray: number[] = []
    if (reset==true) {
        setLocation({})
        setErrorMsg('')
        setDistance(0)
        const coordsArray: number[] = []
        reset=false
    }

    useFocusEffect(React.useCallback(() => {
        (async function () {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

            coordsArray.push(location.coords.latitude, location.coords.longitude)

            if (coordsArray.length > 3) {
                setDistance(getDistance(
                    { latitude: coordsArray[coordsArray.length - 4], longitude: coordsArray[coordsArray.length - 3]},
                    { latitude: coordsArray[coordsArray.length - 2], longitude: coordsArray[coordsArray.length - 1]} 
                )+distance)
            }
        })();
    }, []))
    return (distance*0.001).toFixed(2)
}