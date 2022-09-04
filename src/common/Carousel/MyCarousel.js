import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Media from '../Media';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;


export default function MyCarousel(props) {
    const [active, setActive] = React.useState(0)

    const handleOnscroll = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if (slide != active) {
            setActive(slide);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={handleOnscroll}
                style={styles.imgBox}
            >
                {
                    props.isUploadImage ?
                        props.imagesData.length > 0 &&
                        props.imagesData.map((x, i) => {
                            return <>
                                <View style={styles.imageUploadContent}>
                                    <Image
                                        style={[styles.userImg, styles.imageUpload]}
                                        source={{ uri: x.uri }}
                                    />

                                    <Ionicons name="close-circle-outline" size={40} style={styles.closeIcon}
                                        onPress={() => props.handleRemoveImage(x.name)}
                                    />
                                </View>

                            </>

                        })
                        :
                        props.imagesData.length > 0 &&
                        props.imagesData.map((x, i) => {
                            return <Image
                                style={styles.userImg}
                                source={x}
                            />
                        })
                }
            </ScrollView>
            <View style={styles.paginationBox}>
                {props.imagesData.map((x, i) => {
                    return <View style={[styles.pagingDot, { backgroundColor: active == i ? '#267edf' : '#b5b6b8' }]}></View>
                })}
            </View>
            {/* <Media type="video" /> */}
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
    },
    imgBox: {

    },
    userImg: {
        backgroundColor: 'green',
        width: width,
        height: 350
    },
    paginationBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width,
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    pagingDot: {
        height: 7,
        width: 7,
        borderRadius: 7 / 2,
        marginRight: 3
    },
    imageUploadContent:{
        position: "relative"
    },
    closeIcon: {
        position: "absolute",
        top: 5,
        bottom: "auto",
        right: 5,
        left: "auto"
    }

});
