import React from 'react'
import { Header } from 'react-native-elements'


const Menu = () => (
  <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Man Gash: the App!', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
  />
)

export default Menu
