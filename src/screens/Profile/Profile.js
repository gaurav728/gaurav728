import { StyleSheet, Text, Dimensions, Image, View, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import theme from '../../styles/theme.style';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

const tempPostArr = [
    {
        img: require("../../assets/img/food-img-3.webp"),
        id: 1
    },
    {
        img: require("../../assets/img/food-img-2.webp"),
        id: 2
    },
    {
        img: require("../../assets/img/food-img-3.webp"),
        id: 3
    },
    {
        img: require("../../assets/img/food-img-2.webp"),
        id: 4
    },
    {
        img: require("../../assets/img/food-img-1.webp"),
        id: 5
    }
]

const tempFollowsArr = [
    {
        img: require("../../assets/img/food-img-3.webp"),
        userName: "nikitabansal",
        firstName: "Nikita",
        lastName: "Bansal",
        id: 1
    },
    {
        img: require("../../assets/img/food-img-2.webp"),
        id: 2,
        userName: "nikitabansal2",
        firstName: "Nikita",
        lastName: "Bansal",
    },
    {
        img: require("../../assets/img/food-img-3.webp"),
        userName: "nikitabansal3",
        firstName: "Nikita",
        lastName: "Bansal",
        id: 3
    },
    {
        img: require("../../assets/img/food-img-2.webp"),
        userName: "nikitabansal4",
        firstName: "Nikita",
        lastName: "Bansal",
        id: 4
    },
    {
        img: require("../../assets/img/food-img-1.webp"),
        userName: "nikitabansal5",
        firstName: "Nikita",
        lastName: "Bansal",
        id: 5
    }
]


export default function Profile() {
    const [activeTab, setActiveTab] = React.useState("post")
    const [isMyProfile, setIsMyProfile] = React.useState("other")
    const handleClickTab = (type) => {
        setActiveTab(type)
    }

    const renderItemPost = ({ item }) => (
        <Item img={item.img} />
    );
    

    return (
        <ScrollView style={styles.loginMain}>
            <View style={styles.imageContent}>
                <Image
                    style={styles.coverPhotoImg}
                    source={require('../../assets/img/profile-photo.png')}
                />
                <View style={styles.profileImgContent}>
                    <View style={styles.follwerText}>
                        <Text style={{ color: "#000", fontWeight: "600", textAlign: "center" }}>134</Text>
                        <Text style={{ color: "#b9b9ba", fontWeight: "500" }}>Followers</Text>
                    </View>
                    <Image
                        style={styles.profileImg}
                        source={require('../../assets/img/profile-img.jpg')}
                    />
                    <View style={styles.follwingText}>
                        <Text style={{ color: "#000", fontWeight: "600", textAlign: "center" }}>134</Text>
                        <Text style={{ color: "#b9b9ba", fontWeight: "500" }}>Followers</Text>
                    </View>
                </View>
            </View>
            <View style={styles.nameDetail}>
                <Text style={{ color: "#000", fontWeight: "600", fontSize: 20 }}>Nikita bansal</Text>
                <Text>nikitabansal</Text>
            </View>
            {
                isMyProfile == "myProfile" ?
                    <View style={styles.EditBtnContent}>
                        <View style={[styles.btnFollow, styles.btnMessage]}>
                            <TouchableOpacity>
                                <Text style={{ color: theme.PRIMARY_COLOR, fontSize: 16 }}>
                                    Edit
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    :
                    <View style={styles.followMessageBtnContent}>
                        <View style={styles.btnFollow}>
                            <TouchableOpacity>
                                <Text style={styles.btnTextColor}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.btnFollow, styles.btnMessage]}>
                            <TouchableOpacity>
                                <Text style={{ color: theme.PRIMARY_COLOR }}>Message</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            }

            <View style={styles.userPostsFollowerContent}>
                <TouchableOpacity onPress={() => handleClickTab("post")}>
                    <View style={[activeTab == "post" && styles.postTabActive, styles.tabsCustom]}>
                        <Icon name="ios-apps-sharp" size={20} color="#000" onPress={() => handleClickTab("edit")} style={styles.iconImage} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleClickTab("follows")}>
                    <View style={[activeTab == "follows" && styles.postTabActive, styles.tabsCustom]}>
                        <FAIcon name="user-tag" size={20} color="#000" onPress={() => handleClickTab("edit")} style={styles.iconImage} />
                    </View>
                </TouchableOpacity>
            </View>
            {
                (activeTab == "post" || activeTab == "follows") &&
                <View style={styles.postImageBox}>
                    {
                        tempPostArr.length > 0 &&
                        tempPostArr.map((post, i) => {
                            return <>
                                <TouchableOpacity>
                                    <Image
                                        style={styles.postImage}
                                        source={post.img}
                                    />
                                </TouchableOpacity>
                            </>
                        })
                    }
                </View>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    loginMain: {
        backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
        paddingTop: 20,
    },
    imageContent: {
        position: "relative",
        paddingBottom: 70,
        backgroundColor: "#fff",

    },
    coverPhotoImg: {
        width: vw * 100,
        height: vw* 60
    },
    profileImgContent: {
        position: "absolute",
        bottom: 0,
        textAlign: "center",
        flexDirection: "row",
        width: "100%",
        padding: 10,
        alignItems: "center",
        justifyContent: "space-around",
    },
    profileImg: {
        width: vw * 30,

        height: vw * 30,
        borderRadius: vw * 30/2,
        alignSelf: "center",
        padding: 2
    },
    nameDetail: {
        width: "100%",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20
    },
    follwerText: {
        alignSelf: "center",
        marginTop: 40
    },
    follwingText: {
        alignSelf: "center",
        marginTop: 40
    },
    EditBtnContent: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        width: vw * 100
    },
    editBtn:{
        width: vw * 40,
        height: 40,
    },
    followMessageBtnContent: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-around",
        marginBottom: 20
    },
    btnFollow: {
        width: vw * 30,
        height: 40,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#fff",
        backgroundColor: theme.PRIMARY_COLOR
    },
    btnTextColor: {
        color: "#fff"
    },
    iconImage: {
        alignSelf: "center"
    },
    btnMessage: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: theme.PRIMARY_COLOR
    },
    userPostsFollowerContent: {
        flexDirection: "row",
        borderBottomColor: "#eee",
        borderBottomWidth: 2,
        margin: 20,
        justifyContent: "space-between",
    },
    postTabActive: {
        borderBottomColor: theme.PRIMARY_COLOR,
        borderBottomWidth: 2,
        fontWeight: "600",
        color: "#000",

    },
    tabsCustom: {
        color: "#000",
        width: vw * 40,
    },
    postImageBox: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    postImage: {
        width: vw * 33,
        height: 120,
        borderWidth: 0.5,
        borderColor: '#fff'
    },
    pencileIcon: {
        marginRight: 4
    }
})