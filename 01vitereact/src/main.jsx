import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

const anotherVariable="How are ya"

const reactElement=React.createElement(
  'a',
  {href : 'https//google.com'},
  'Click on the link',
  anotherVariable
)

createRoot(document.getElementById('root')).render(

    reactElement

)
