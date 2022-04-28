import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function CustomHeader(props) {
    console.log(props)
    return (
        <View style={{ width: width - 30 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {props.back &&
                    <TouchableOpacity onPress={() => props.navigation.goBack()} >
                        <Icon name='arrow-left' size={30} color="#000" />
                    </TouchableOpacity>
                }
                <Text style={{marginTop:7}}>{props.title}</Text>
                <TouchableOpacity>
                    <Icon name='message-circle' size={30} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})