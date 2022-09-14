import React from 'react'
import styled from 'styled-components/native'

export const CardView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-left: 5%;
  padding-right: 5%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`

export const ViewData = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const PlaceText = styled.Text`
  font-family: 'sans-serif';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  padding: 0;
  margin: 0;
`
