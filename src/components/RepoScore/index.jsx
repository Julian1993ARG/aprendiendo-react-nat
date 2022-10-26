import React from 'react'
import { View } from 'react-native'
import TextStyle from '../TextStyle'

// Esta funcion permite pasar de 1000 a 1k
function parsThousands (value) {
  return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)
}

export default function RepoScore ({ forksCount, stargazersCount, ratingAverage, reviewCount }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10, alignItems: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        <TextStyle color='secundary' fontWeight='bold'>Forks:</TextStyle>
        <TextStyle color='secundary'>{parsThousands(forksCount)}</TextStyle>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TextStyle color='secundary' fontWeight='bold'>Stars:</TextStyle>
        <TextStyle color='secundary'>{parsThousands(stargazersCount)}</TextStyle>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TextStyle color='secundary' fontWeight='bold'>Average:</TextStyle>
        <TextStyle color='secundary'>{ratingAverage}</TextStyle>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TextStyle color='secundary' fontWeight='bold'>Reviews:</TextStyle>
        <TextStyle color='secundary'>{reviewCount}</TextStyle>
      </View>
    </View>
  )
}
