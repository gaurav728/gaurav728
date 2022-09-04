import { StyleSheet, Text, Dimensions, Image, View, FlatList, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import theme from '../../styles/theme.style';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import MyCarousel from '../../common/Carousel/MyCarousel';

const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function CreatePost() {
    const [chooseImageOption, setChooseImageOption] = useState(false);
    const [mediaUrl, setMediaUrl] = useState([])

    const handleCamera = () => {
        setChooseImageOption(false)
        var options = {
            mediaType: 'photo',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        }
        launchCamera(options, function (response) {
            var file = {
                uri: response.uri,
                name: response.fileName,
                type: "image/png"
            }
            console.log("filefilefilefilefile", file)
            // uploadImageToS3(file, 'image')
        });
    }
    const handleLibrary = () => {
        setChooseImageOption(false)
        var options = {
            mediaType: 'photo',
            selectionLimit: 5
        }
        launchImageLibrary(options, function (response) {
            console.log("responseresponseresponse", response.assets[0])
            const tempArrFile = []
            if (response.assets) {
                response.assets.map((path, i) => {
                    tempArrFile.push(
                        {
                            uri: path.uri,
                            name: path.fileName,
                            type: "image/png"
                        }
                    )
                })
            }
            setMediaUrl([...tempArrFile])
            // uploadImageToS3(file, 'image')
        })
    }

    const handleRemoveImage = (name) => {
        if (mediaUrl.length > 0) {
            var newArr = mediaUrl.filter((item) => item.name !== name)
            setMediaUrl([...newArr])
        }
    }


    return (
        <ScrollView style={styles.createPostMain}>
            {/* <TouchableOpacity onPress={() => handleCamera()} >
                <Text style={{ textAlign: 'center', backgroundColor: 'red' }}>open camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleLibrary()} >
                <Text style={{ textAlign: 'center', backgroundColor: 'red' }}>open library</Text>
            </TouchableOpacity> */}

            {
                mediaUrl.length > 0 ?
                    <>
                        <MyCarousel imagesData={mediaUrl} isUploadImage={true} handleRemoveImage={handleRemoveImage} />
                        <View style={styles.uploadBtnMain}>
                            <View style={styles.uploadBtn}>
                                <TouchableOpacity>
                                    <Text style={styles.btnTextColor}>Upload</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.selectMore}>
                                <TouchableOpacity>
                                    <Text style={styles.selectTextColor}>Select more ?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </>
                    :
                    <>
                        <Image
                            source={require("../../assets/img/filnal-image-post-upload.png")}
                            style={styles.uploadImagePoster}
                        />
                    </>

            }



        </ScrollView>
    )
}

const styles = StyleSheet.create({
    createPostMain: {
        backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
        paddingTop: 20,
    },
    uploadBtn: {
        width: vw * 60,
        height: 60,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#fff",
        backgroundColor: theme.PRIMARY_COLOR,
        textAlign: "center"
    },
    btnTextColor: {
        color: "#fff",
        fontWeight: "600"
    },
    uploadBtnMain: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100
    },
    selectTextColor: {
        borderBottomColor: theme.PRIMARY_COLOR,
        borderBottomWidth: 1,
        fontWeight: "600"
    },
    selectMore: {
        marginTop: 10
    },
    uploadImagePoster: {
        width: width,
        height: 350
    },
})