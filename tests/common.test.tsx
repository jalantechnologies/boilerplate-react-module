import * as React from 'react'
import { render } from '@testing-library/react'
import 'jest-canvas-mock'

import { MyTool } from '../src'

describe('MyTool', () => {
  it('renders without crashing', () => {
    render(<MyTool/>)
  })
})
