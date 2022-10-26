import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#e1e4e8',
    borderRadius: 6,
    padding: 10,
    margin: 10,
    backgroundColor: '#fafbfc'
  },
  error: {
    borderColor: '#d73a4a'
  }
})

const StyledTextInput = ({ style, error, ...props }) => {
  const inputStyle = [
    styles.textInput,
    error && styles.error,
    style
  ]

  return <TextInput style={inputStyle} {...props} />
}

export default StyledTextInput
