import styled, { css } from 'styled-components'

export const ThemeColorConsumer = styled.div`
  width: fit-content;

  ${({ theme }) => css`
    color: ${theme.colors.foreground.normal};
    background-color: ${theme.colors.background.normal};

    font-size: ${theme.fontSize.normal};

    padding: ${theme.spacing.long};

    border-radius: ${theme.borderRadius.default};
    border: 1px solid ${theme.colors.foreground.normal};
    box-shadow: ${theme.shadow.normal} ${theme.shadow.normal};
  `}
`
