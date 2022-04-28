import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from 'react-native-gesture-handler';

import theme from './styles/theme.style';

const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function Welcome({navigation}) {
    return (
        <View style={styles.main}>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')} >
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                    <Text style={styles.text}>SignUp</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Text style={styles.text}>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        height: height,
        width: width,
        flexDirection:'column',
        justifyContent:'center',
    },
    text:{
        fontSize: theme.FONT_SIZE_MEDIUM,
        color:theme.PRIMARY_COLOR,
        textAlign:'center',
        marginBottom:20
    }
})