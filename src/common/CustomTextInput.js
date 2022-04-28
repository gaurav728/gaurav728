import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

export default function CustomTextInput(props) {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={(text) => props.setValue(text)}
        // value={text}
        secureTextEntry={props.isPassword ? true : false} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "#eee"
      },
})