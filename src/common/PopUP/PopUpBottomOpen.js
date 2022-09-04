import { Modal, View, Text, Dimensions, TouchableOpacity, StyleSheet } from "react-native"
import React from 'react'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CustomTextInput from "../CustomTextInput";
import theme from '../../styles/theme.style';


const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function PopUpBottomOpen(props) {
    const [isSomethingElse, setIsSomethingElse] = React.useState(false)
    const popupData = props.popupModalData;

    const handleClickMenu = (val = "") => {
        if(val != ""){
            setIsSomethingElse(val)
        }
        else{
            props.setShow(false)
        }
    }


    return (<View>
        <Modal
            animationType={"fade"}
            transparent={true}
            visible={props.show}
        // onRequestClose={() => props.setShow(false)}
        >
            <View style={{ flex: 1, backgroundColor: "#000000AA", justifyContent: "flex-end" }}>
                <TouchableOpacity
                onPressOut={() => handleClickMenu()}
                >
                    <View style={{
                        backgroundColor: "#fff",
                        width: "100%",
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        paddingHorizontal: 10,
                        paddingBottom: 20
                    }}
                    >
                        {
                            popupData != {} &&
                            <View>
                                <Text style={{ color: "#182E44", fontSize: 20, margin: 15, fontWeight: "500", textAlign: "center" }}>
                                    {popupData.heading}
                                </Text>
                                <View>
                                    <Text style={styles.heafingText} >
                                        {popupData.subHeading}
                                    </Text>
                                    <Text>
                                        {popupData.description}
                                    </Text>
                                </View>
                                <View style={styles.detailReport}>
                                    {popupData.data && popupData.data != [] &&
                                        popupData.data.map((item, i) => {
                                            return <View style={styles.borderBottomContent}  >
                                                <Text style={styles.colorDark} onPress={() => handleClickMenu(item.text)}>
                                                    {item.text}
                                                </Text>
                                                <EntypoIcon name={"chevron-small-right"} size={20} style={styles.rightIcon} onPress={() => handleClickMenu(item.text)} />
                                            </View>
                                        })}
                                    {
                                        isSomethingElse == "Something else" &&
                                        <View>
                                            <CustomTextInput
                                                placeholder="What are you trying to report?"
                                            />
                                            <View style={styles.submitBtn}>
                                                <TouchableOpacity>
                                                    <Text style={styles.btnTextColor}>Submit</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    }
                                </View>

                            </View>
                        }
                    </View>

                </TouchableOpacity>
            </View>

        </Modal>
    </View>);
}
const styles = StyleSheet.create({
    heafingText: {
        color: "#000",
        fontSize: 15,
        fontWeight: "500",
    },
    detailReport: {
        marginTop: 20,
        marginBottom: 20
    },
    borderBottomContent: {
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        marginBottom: 10,
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    colorDark: {
        color: "#000",
        width: vw * 90,
    },
    rightIcon: {
        width: vw * 10,
    },
    submitBtn: {
        width: vw * 25,
        marginHorizontal: vw * 35,
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