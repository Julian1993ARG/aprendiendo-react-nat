import React from 'react'
import { View, StyleSheet } from 'react-native'

import RepoScore from '../RepoScore'
import RepoHeader from '../RepoHeader'

export default function propsItems (props) {
  return (
    <View key={props.id} style={styles.container}>
      <RepoHeader {...props} />
      <RepoScore {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginHorizontal: 10
  }
})
