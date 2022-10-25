import React from 'react'
import { View, StyleSheet } from 'react-native'
import TextStyle from './TextStyle'

export default function propsItems (props) {
  return (
    <View key={props.id} style={styles.container}>
      <TextStyle fontWeight='bold' color='primary'>FullName: {props.fullName}</TextStyle>
      <TextStyle color='secundary' fontSize='subheading'>Description: {props.description}</TextStyle>
      <TextStyle color='secundary'>Language: {props.language}</TextStyle>
      <TextStyle color='secundary'>Forks: {props.forksCount}</TextStyle>
      <TextStyle color='secundary'>Count: {props.stargazersCount}</TextStyle>
      <TextStyle color='secundary'>Average: {props.ratingAverage}</TextStyle>
      <TextStyle color='secundary'>Reviews: {props.reviewCount}</TextStyle>
      <TextStyle color='secundary'>Avatar: {props.ownerAvatarUrl}</TextStyle>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 5,
    marginTop: 5
  }
})
