import React, { Component } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'

export default class Album extends Component {
  state = {
    buttonTitle: 'FREAK ON SOME MANGASH'
  }

  handleMangash = () => {
    const { buttonTitle } = this.state
    if (buttonTitle === 'FREAK ON SOME MANGASH') {
      this.setState({
        buttonTitle: 'JUST FOR A SPELL'
      })
    } else {
      this.setState({
        buttonTitle: 'FREAK ON SOME MANGASH'
      })
    }
  }
  render() {
    const { buttonTitle } = this.state
    return (
      <View>
        <Button
          raised
          icon={{
            name: 'squirrel',
            type: 'octicon',
          }}
          title={buttonTitle}
          onPress={this.handleMangash}
        />
      </View>
    )
  }
}
