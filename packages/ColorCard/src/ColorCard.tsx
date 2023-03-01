import React from 'react'
import { Container } from './ColorCard.styles'

interface ColorCardProps {
  color: string
  active?: boolean
}

export const ColorCard: React.FC<ColorCardProps> = ({ color, active }) => {
  return <Container color={color} active={active} />
}
