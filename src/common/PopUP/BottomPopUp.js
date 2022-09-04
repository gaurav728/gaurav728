import { StatusBar, SafeAreaView, TouchableWithoutFeedback, StyleSheet, Text } from "react-native"
import React from 'react'
import PopUpBottomOpen from "./PopUpBottomOpen"


export default function BottomPopUp(props) {
    const [show, setShow] = React.useState(false)
    const handleOpen = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }
    return <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={handleOpen}>
                <Text style={styles.textStyle}>
                    Show popup
                </Text>

            </TouchableWithoutFeedback>
            <PopUpBottomOpen
                handleOpen={handleOpen}
                handleClose={handleClose}
                show={show}
                onTouchOutSide={handleClose}
                title={"this is my pop up"}
            />
        </SafeAreaView>
    </>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItem: "center",
        justifyContent: "center"
    },
    textStyle: {
        fontSize: 20
    }
})