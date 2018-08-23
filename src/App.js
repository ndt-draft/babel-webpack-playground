import React from 'react'
import './App.css'
import List from 'ndt-react-list'

const posts = [
  {
    id: 1,
    title: 'Create Apps with No Configuration',
  },
  {
    id: 2,
    title: 'Mixins Considered Harmful',
  },
]

const App = () => (
  <div className="app">
    <List collection={posts} titleKey="title" />
    <ul className="custom-list">
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <div className="input-wrapper">
      <input className="input" placeholder="Enter your text"/>
    </div>
  </div>
)

export default App
