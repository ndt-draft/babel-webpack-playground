import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Button from './button'

configure({ adapter: new Adapter() })

test('renders with text by enzyme', () => {
  const text = 'text'
  const button = shallow(<Button text={text}/>)
  expect(button.type()).toBe('button')
  expect(button.text()).toBe(text)
})

test('fires the onClick callback', () => {
  const onClick = jest.fn()
  const button = shallow(<Button onClick={onClick}/>)
  button.simulate('click')
  expect(onClick).toBeCalled()
})
