import React from 'react'
import { Button } from './Button'
import { ComponentMeta, ComponentStory, } from '@storybook/react'
import { ThemeProvider } from '@mui/material'
import theme from '../../../Theme/theme'
import Add from '@mui/icons-material/Add'


export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeProvider theme={theme}><Button {...args} /></ThemeProvider>
)


export const SecondaryButton = Template.bind({})

SecondaryButton.args = {
  name: 'New Patient',
  variant: 'text',
 background:  theme.palette.background1.main,
  textcolor: theme.palette.blue[500],
  startIcon: <Add/>
}
export const PrimaryButton = Template.bind({})

PrimaryButton.args = {
  name: 'Complete Order',
  variant: 'contained',
 background: theme.palette.blue[500],
  width: '290px',
  height: '46px',
  textcolor: theme.palette.background1.main,
}

