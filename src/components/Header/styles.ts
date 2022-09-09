import React from 'react'
import styled from 'styled-components'

export const DivHeader = styled.div`
  box-sizing: border-box;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
  background: #FFFFFF;
`
export const Icon = styled.img`
  height: 16px;
  width: 16px;
`

export const Title = styled.h3`
  font-family: 'Neuzeit Grotesk';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
`