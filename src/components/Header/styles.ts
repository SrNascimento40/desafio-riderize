import React from 'react'
import styled from 'styled-components/native'

export const ViewHeader = styled.View`
  box-sizing: border-box;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #FFFFFF;
`
export const Icon = styled.Image`
  height: 16px;
  width: 16px;
`

export const Title = styled.Text`
  font-family: 'sans-serif';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
`