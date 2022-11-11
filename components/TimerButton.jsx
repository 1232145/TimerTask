import React from 'react'
import { StyleSheet, Text, Button, TouchableOpacity } from 'react-native'

function TimerButton({ small, color, title, handleOnClick }) {
  return (
    // <Button
    //   title={title}
    //   color={color}
    //   onPress={(e) => handleOnClick(e, title)}
    // />
    <TouchableOpacity
      style={[styles.button, { borderColor: color }]}
      onPress={() => handleOnClick(title)} >
      <Text
        style={[
          styles.buttonText,
          small ? styles.small : styles.large,
          { color },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    minWidth: 100,
    borderWidth: 2,
    borderRadius: 3,
  },
  small: {
    fontSize: 14,
    padding: 5,
  },
  large: {
    fontSize: 16,
    padding: 10,
  }, 
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

export default TimerButton