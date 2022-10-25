import React from 'react'
import { View } from 'react-native'
import RepoData from './RepoData'
import Constants from 'expo-constants'

export default function Main () {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <RepoData />
    </View>
  )
}
