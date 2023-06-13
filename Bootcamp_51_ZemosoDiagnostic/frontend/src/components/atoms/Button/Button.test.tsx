import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react'
import Button  from './Button'
import React from "react"

it('render button',()=>{
    render(
  
    <Button name={'Complete Order'} />
      )
    const buttonText = screen.getByTestId('btn')
    expect(buttonText).toBeInTheDocument();

})
