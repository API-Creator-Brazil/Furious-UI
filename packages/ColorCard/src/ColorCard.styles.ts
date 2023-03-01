import styled, { css } from 'styled-components'

interface ContainerProps {
  color: string
  active?: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;

  border-radius: 4px;

  ${({ color }) => css`
    background-color: ${color};
  `}

  ${({ active }) =>
    active === true &&
    css`
      border: 2px solid black;
    `}
`
