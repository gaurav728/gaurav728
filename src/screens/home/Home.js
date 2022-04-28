import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import theme from '../../styles/theme.style';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

// import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

const homeTempArr = [
  {
    id: "1",
    imgSrc: require("../../assets/img/food-img-2.webp"),
    videoSrc: "",
    location: "mahalaxmi nagar",
    userName: "nikitabansal",
    userImage: require("../../assets/img/food-img-3.webp"),
    like: 5,
    isLike_you: true,
    commentList:[
      {
        comment: "this is good food",
        commentuserName: "nikita bansal",
        commentUserProfile: require("../../assets/img/profile-photo.png"),
        comment_id: "332"
      },
      {
        comment: "this is grt food",
        commentuserName: "neha bansal",
        commentUserProfile: require("../../assets/img/profile-photo.png"),
        comment_id: "33"
      }
    ]
  },
  {
    id: "2",
    imgSrc: "",
    videoSrc: require("../../assets/video/sample-1.mp4"),
    location: "mahalaxmi nagar",
    userImage: require("../../assets/img/food-img-3.webp"),
    userName: "test_308"
  },
  {
    id: "3",
    imgSrc: require("../../assets/img/food-img-3.webp"),
    videoSrc: "",
    location: "mahalaxmi nagar",
    userImage: require("../../assets/img/food-img-3.webp"),
    userName: "neha_22"
  },
  {
    id: "4",
    imgSrc: require("../../assets/img/food-img-1.webp"),
    videoSrc: "",
    location: "mahalaxmi nagar",
    userImage: require("../../assets/img/food-img-3.webp"),
    userName: "gauravgarg"
  }
]
export default function Home() {


  return (
    <ScrollView style={styles.loginMain}>

      <View>
        {
          homeTempArr.length > 0 ?
            homeTempArr.map((item, i) => {
              return <>
                <View style={styles.postDetail}>


                  <View style={styles.profileDetail}>
                    <Image
                      style={styles.userImg}
                      source={item.userImage}
                    />
                    <View style={styles.userNameLoaction}>
                      <Text >{item.userName}</Text>
                      <Text>{item.location}</Text>
                    </View>
                    <EntypoIcon name="dots-three-horizontal" size={20} style={styles.menuIcon} />
                  </View>

                  <View>
                    {/* <Video
                      source={{ uri: 'https://www.youtube.com/watch?v=M-zngJTWvKM&list=RDM-zngJTWvKM&start_radio=1' }}
                      rate={1.0}
                      volume={1.0}
                      isMuted={false}
                      resizeMode="cover"
                      shouldPlay
                      isLooping
                      style={{ width: 300, height: 300,backgroundColor:'red' }}
                    /> */}
                    {/* {
                      item.videoSrc != "" &&
                     
                      <Video
                        source={{
                          uri: "https://www.example.com/video.mp4"
                        }}   // Can be a URL or a local file.
                        //  ref={(ref) => {
                        //    this.player = ref
                        //  }}                                      // Store reference
                        //  onBuffer={this.onBuffer}                // Callback when remote video is buffering
                        //  onError={this.videoError}               // Callback when video cannot be loaded
                        style={styles.backgroundVideo} />
                    } */}
                    {
                      item.imgSrc != "" &&
                      <Image
                        style={styles.profileImage}
                        source={item.imgSrc}
                      />
                    }
                  </View>
                  <View style={styles.profileDetail}>
                  <EntypoIcon name={item.isLike_you ? "heart" : "heart-outlined"} size={20} style={styles.heartIcon} />
                  <FontAwesomeIcon name="comment-o" size={20} style={styles.commentIcon} />

                  </View>
                </View>
              </>
            })
            :
            <></>
        }
      </View>
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
  postDetail: {
    marginBottom: 10
  },

  profileDetail: {
    flexDirection: "row",
    marginBottom: 10,
    width: vw * 80,
    marginHorizontal: vw * 2
  },
  userImg: {
    width: vw * 10,
    height: vw * 10,
    borderRadius: 50
  },
  userNameLoaction: {
    width: vw * 80,
    paddingLeft: 15,
    paddingRight: 15
  },
  menuIcon: {
    width: vw * 10,
  },
  profileImage: {
    width: width,
    height: vh * 40,
  },
  backgroundVideo: {
    width: width,
    height: vh * 40,
  }
})