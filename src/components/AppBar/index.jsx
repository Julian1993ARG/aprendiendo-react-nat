import React from 'react'
import { ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import TextStyle from '../TextStyle'
import Constants from 'expo-constants'
import theme from '../../Theme'
import { Link, useLocation } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 10
  },
  text: {
    paddingHorizontal: 10,
    color: theme.appBar.textSecondary
  },
  scroll: {
    paddingBottom: 20
  },
  active: {
    color: theme.appBar.textPrimary
  }
})

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation()
  const active = pathname === to
  const textStyles = [
    styles.text,
    active && styles.active
  ]
  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <TextStyle style={textStyles} fontWeight='bold'>
        {children}
      </TextStyle>
    </Link>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to='/'>Repositories</AppBarTab>
        <AppBarTab to='/signin'>Sign In</AppBarTab>
      </ScrollView>
    </View>
  )
}

export default AppBar
