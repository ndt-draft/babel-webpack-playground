import React from 'react'
import styles from './App.module.css'
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
  <div className={styles.app}>
    <List collection={posts} titleKey="title" />
    <ul className={styles['custom-list']}>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <div className={styles['input-wrapper']}>
      <input className={styles['input']} placeholder="Enter your text"/>
    </div>
  </div>
)

export default App
