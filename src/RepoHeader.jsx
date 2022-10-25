import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import TextStyle from './TextStyle'
import theme from './Theme'

export default function RepoHeader ({ ownerAvatarUrl, fullName, description, language }) {
  return (
    <View style={{ flexDirection: 'row', paddingEnd: 4 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.img} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        <TextStyle fontWeight='bold' color='primary'>{fullName}</TextStyle>
        <TextStyle color='secundary' fontSize='subheading'>{description}</TextStyle>
        <TextStyle color='secundary' style={styles.lenguage}>{language}</TextStyle>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    width: 48,
    height: 48,
    borderRadius: 4
  },
  lenguage: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4
  }
})
