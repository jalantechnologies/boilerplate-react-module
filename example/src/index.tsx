import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyTool } from 'boilerplate-react-module'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <div>
      <h2>Example</h2>
      <MyTool/>
    </div>
  </React.StrictMode>,
)
