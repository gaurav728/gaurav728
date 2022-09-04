import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react';
import theme from '../styles/theme.style';
import { TouchableOpacity } from 'react-native-gesture-handler'
const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function CustomButton(props) {
  return (
    <View style={styles.primaryBtn}>
        <TouchableOpacity>
        <Text style={ styles.btnTextColor}>{props.btnText}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    primaryBtn: {
        width: vw * 80,
        marginHorizontal: vw * 10,
        backgroundColor: theme.PRIMARY_COLOR,
        height: 40,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        
    },
    btnTextColor:{
        color: "#fff"
    }
})