import React, { useState } from 'react';
import { Text } from 'react-native';

interface iCrono {
    startStop:boolean;
    clearTimer:boolean
}

export default function Crono(props:iCrono) {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hour, setHour] = useState(0)
    const [customInterval, setCustomInterval] = useState<NodeJS.Timer>()

    const start = () => {
        setCustomInterval(
            setInterval(() => {
                clock();
            }, 1000)
        )
    }
    const stop = () => {
        if (customInterval) {
            clearInterval(customInterval)
        }
    }
    const clear = () => {
        stop()
        setMinutes(0)
        setSeconds(0)
        setHour(0)
    }
    const clock = () => {
        setSeconds((prevState) => {
            if (prevState + 1 == 60) {
                if (minutes + 1 == 60) {
                    setHour(hour + 1)
                    setMinutes(0)
                    return (0)
                }
                setMinutes(minutes + 1)
                return (0)
            }
            return (
                prevState + 1
            )
        })
    }

    if (props.startStop==true) {
        start()
    } else {
        stop()
    }
    if (props.clearTimer==true){
        clear()
    }


    return (
        <Text style={{fontFamily: 'sans-serif', lineHeight: 72, fontSize: 64, fontWeight: '900',paddingBottom: 10}}>
            {minutes < 10 ? '0'+ minutes : minutes }:
            {seconds < 10 ? '0'+ seconds : seconds }:
            {hour < 10 ? '0'+ hour : hour }
        </Text>
    )
}

