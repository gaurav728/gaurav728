import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Video from './Media/Video'

export default function Media(props) {
  return (
    <View>
      {props.type == "video" &&
        <Video src={'sss'} />
      }
    </View>
  )
}

const styles = StyleSheet.create({})