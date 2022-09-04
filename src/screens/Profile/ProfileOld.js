import { StyleSheet, Text, Dimensions, Image, View, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import theme from '../../styles/theme.style';
import Icon from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../common/CustomButton';

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

const Item = ({ img }) => (
    <View>
        <Image
            style={{ width: 20, height: 20 }}
            source={img}
        />
    </View>
);


export default function ProfileOld() {
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
            {
                isMyProfile == "other" ?
                    <View styles={styles.followsContentMain}>
                        <Image
                            style={styles.profileImageOther}
                            source={require('../../assets/img/profile-photo.png')}
                        />
                    </View>
                    :
                    <View style={styles.imageIcon}>
                        <Image
                            style={styles.profileImage}
                            source={require('../../assets/img/profile-photo.png')}
                        />
                        <View style={styles.pencilIconContent}>
                            <FAIcon name="pencil-alt" size={20} style={styles.pencilIcon} color="#fff" onPress={() => handleClickTab("edit")} />

                        </View>

                    </View>
            }

            <View style={styles.userPostsFollowerContent}>
                <TouchableOpacity onPress={() => handleClickTab("post")}>
                    <View style={[activeTab == "post" && styles.postTabActive, styles.tabsCustom]}>
                        <Text>Posts (100)</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleClickTab("follows")}>
                    <View style={[activeTab == "follows" && styles.postTabActive, styles.tabsCustom]}>
                        <Text>Follows </Text>
                        <Text>10.5 M</Text>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleClickTab("Following")}>
                    <View style={[activeTab == "Following" && styles.postTabActive, styles.tabsCustom, styles.lastTab]}>
                        <Text >10.5 M</Text>

                        <Text style={{ alignSelf: 'flex-end' }}>
                            Following
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            {
                activeTab == "post" &&
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
            {
                (activeTab == "follows" || activeTab == "Following") &&
                <View style={styles.followsContent}>
                    {
                        tempFollowsArr.length > 0 &&
                        tempFollowsArr.map((item, i) => {
                            return <>
                                <View style={styles.followsContentMain}>
                                    <Image
                                        style={styles.followImage}
                                        source={item.img}
                                    />
                                    <View style={styles.userDetail}>
                                        <Text>{item.firstName} {item.lastName}</Text>
                                        <Text>{item.userName}</Text>
                                    </View>
                                    <View style={styles.removeBtn}>
                                        <TouchableOpacity>
                                            <Text style={styles.btnTextColor}>Remove</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </>
                        })
                    }
                </View>
            }
            {
                activeTab == "edit" &&
                <>
                    <View style={styles.profileDetail}>
                        <Text style={styles.headingText}>
                            Name
                        </Text>
                        <Text style={styles.subText}>
                            Nikita Bansal
                        </Text>
                        <View style={styles.borderBottom} >

                        </View>
                    </View>
                    <View style={styles.profileDetail}>
                        <Text style={styles.headingText}>
                            Mobile
                        </Text>
                        <Text style={styles.subText}>
                            91234567890
                        </Text>
                        <View style={styles.borderBottom} >

                        </View>
                    </View>
                    <View style={styles.profileDetail}>
                        <Text style={styles.headingText}>
                            Mobile
                        </Text>
                        <Text style={styles.subText}>
                            91234567890
                        </Text>
                        <View style={styles.borderBottom} >

                        </View>
                    </View>
                    <View style={styles.profileDetail}>
                        <Text style={styles.headingText}>
                            Location
                        </Text>
                        <Text style={styles.subText}>
                            Mahalaxmi nagar
                        </Text>
                        <View style={styles.borderBottom} >

                        </View>
                    </View>
                </>

            }


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    loginMain: {
        backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
        // width: width,
        // minHeight:height,
        paddingTop: 20,

    },
    profileImage: {
        width: width,
        height: vh * 40,
    },
    imageIcon: {
        position: "relative",
        paddingBottom: 20
    },
    pencilIconContent: {
        position: "absolute",
        bottom: 0,
        right: 20,
        backgroundColor: theme.PRIMARY_COLOR,
        padding: 10,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5
    },
    profileDetail: {
        margin: 10
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
        color: "#000"
    },
    tabsCustom: {
        color: "#000",
    },
    headingText: {
        fontWeight: "600",
        color: "#000"
    },
    subText: {
        color: "#bbb"
    },
    borderBottom: {
        borderColor: "#bbb",
        borderBottomWidth: 1,
        marginTop: 10
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
    followImage: {
        width: vw * 15,
        height: vw * 15,
        borderRadius: 50
    },
    userDetail: {
        width: vw * 55,
        paddingLeft: 15,
        paddingRight: 15
    },
    followsContentMain: {
        flexDirection: "row",
        marginBottom: 10,
        width: vw * 80,
        alignItems: "center",
        marginHorizontal: vw * 2
    },
    removeBtn: {
        width: vw * 20,
        height: 30,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#000",
        borderWidth: 1
    },
    btnTextColor: {
        color: "#000"
    },
    profileImageOther: {
        width: vw * 15,
        height: vw * 15,
        borderRadius: 50
    }
})