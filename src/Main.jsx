import React from 'react'
import { View } from 'react-native'
import RepoData from './components/RepoData'
import AppBar from './components/AppBar'
import { Route, Switch, Redirect } from 'react-router-native'
import Login from './pages/Login'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Switch>
        <Route path='/' exact component={RepoData} />
        <Route path='/signin' exact component={Login} />

        <Redirect to='/' />
      </Switch>
    </View>
  )
}

export default Main
