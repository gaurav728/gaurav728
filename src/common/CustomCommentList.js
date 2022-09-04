import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native'
import React from 'react';
import theme from '../styles/theme.style';
import CustomTextInput from './CustomTextInput';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function CustomCommentList({ navigation, route }) {

    // add all props here 
    const {
        commentListing = [], 
        setAddComment = () => {}, 
        addComment= "" 
    } = route.params

    return (
        <ScrollView style={styles.loginMain}>
            {
                commentListing.length > 0 &&
                commentListing.map((item, i) => {
                    return <>
                        <View style={styles.commentProfileDetail}>
                            <Image
                                style={styles.userImg}
                                source={item.commentUserProfile}
                            />
                            <View >
                                <Text style={styles.userName}>{item.commentuserName}</Text>
                            </View>
                            <View>
                                <Text>{item.comment}</Text>
                            </View>
                        </View>

                    </>
                })
            }

            <View style={styles.commentProfileDetail}>
                <View style={styles.commentBox}>
                    <CustomTextInput
                        placeholder="Add a comment..."
                        setValue={setAddComment}
                    />
                </View>
                <View style={styles.commentSend}>
                    <FontAwesomeIcon name="send" size={20} style={styles.sendIcon} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    loginMain: {
        backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
        paddingTop: 20,

    },
    commentProfileDetail: {
        flexDirection: "row",
        marginBottom: 10,
        width: vw * 80,
        marginHorizontal: vw * 2,
        alignItems: "center",
    },
    userImg: {
        width: vw * 10,
        height: vw * 10,
        borderRadius: 50
    },
    commentBox:{
        width: vw * 95,
        position: "relative"

    },
    commentSend:{
        position: "absolute",
        right: 0,
        
    },
    userName: {
        paddingLeft: 10,
        paddingRight: 10,
        fontWeight: "600"
    },
})