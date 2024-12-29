import { Text, View, SafeAreaView } from 'react-native'
import { Component } from 'react'
import Auth  from "./auth"
import ListHeader  from '../../components/list-header'

export class AuthIndex extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <ListHeader />
        <Auth />
      </SafeAreaView>
    )
  }
}

export default AuthIndex