import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, FormLabel, FormInput, Text } from 'react-native-elements'
import styles from './styles'

export default class Album extends Component {
  state = {
    user: '',
    pass: '',
  }

  render() {
    const { logo, submit } = styles
    return (
      <View>
        <View style={logo}>
          <Text
            h1
            style={logo}
          >
            JUJU
          </Text>
        </View>
        <FormLabel>User</FormLabel>
        <FormInput
          onChange={value => this.setState({ user: value })}
          name='userInput'
          focus
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          onChange={value => this.setState({ pass: value })}
          name='passInput'
        />
        <Button
          type='submit'
          title='Login'
          raised
          backgroundColor='purple'
          color='gold'
          style={submit}
        />
      </View>
    )
  }
}
