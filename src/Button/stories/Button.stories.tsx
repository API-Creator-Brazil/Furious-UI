import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { Button } from '../src/Button'

export default {
  title: 'Components/Button',
  component: Button,
}

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'name',
}
