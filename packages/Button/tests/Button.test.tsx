import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '../src/Button'

describe('Button', () => {
  it('should render button name', () => {
    render(<Button>name</Button>)

    const button = screen.getByText('name')
    expect(button).toBeTruthy()
  })
})
