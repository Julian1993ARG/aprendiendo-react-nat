import React from 'react'
import { Text, FlatList } from 'react-native'
import data from './data/data'
import RepoItems from './RepoItems'

export default function Main () {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <Text />}
      renderItem={({ item: repo }) => (
        <RepoItems
          {...repo}
        />
      )}
    />
  )
}
