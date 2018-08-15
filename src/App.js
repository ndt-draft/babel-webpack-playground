import React from 'react'
import style from './App.css'
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
  </div>
)

export default App
