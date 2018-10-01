import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'

import Menu from './src/components/header'
import Album from './src/components/Album'

export default class Index extends Component {
  render() {
    return (
      <View>
        <Menu />
        <Album />
      </View>
    )
  }
}

AppRegistry.registerComponent('albums', () => Index)
