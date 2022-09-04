import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import theme from '../../styles/theme.style';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import CustomCommentList from '../../common/CustomCommentList';
import { createStackNavigator } from '@react-navigation/stack';
import MyCarousel from '../../common/Carousel/MyCarousel';
import { Menu, Divider, Provider } from 'react-native-paper';
import DotMenu from '../../common/DotMenu';

// import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

const homeTempArr = [
	{
		id: "1",
		// imgSrc: require("../../assets/img/food-img-2.webp"),
		imgSrc: [
			require("../../assets/img/food-img-2.webp"),
			require("../../assets/img/food-img-3.webp"),
			require("../../assets/img/food-img-1.webp"),
		],
		videoSrc: "",
		location: "mahalaxmi nagar",
		userName: "nikitabansal",
		userImage: require("../../assets/img/food-img-3.webp"),
		likeCount: 5,
		isLike_you: true,
		title: "This is a very food here...",
		commentList: [
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
		imgSrc: [],
		videoSrc: require("../../assets/video/sample-1.mp4"),
		location: "mahalaxmi nagar",
		userImage: require("../../assets/img/food-img-3.webp"),
		commentList: [],
		title: "This is a very food here...",
		likeCount: 5,
		isLike_you: false,
		userName: "test_308"
	},
	{
		id: "3",
		imgSrc: [require("../../assets/img/food-img-3.webp")],
		videoSrc: "",
		location: "mahalaxmi nagar",
		userImage: require("../../assets/img/food-img-3.webp"),
		commentList: [],
		likeCount: 5,
		isLike_you: false,
		title: "This is a very food here...",
		userName: "neha_22"
	},
	{
		id: "4",
		imgSrc: [require("../../assets/img/food-img-1.webp")],
		videoSrc: "",
		location: "mahalaxmi nagar",
		userImage: require("../../assets/img/food-img-3.webp"),
		commentList: [],
		likeCount: 0,
		isLike_you: false,
		title: "This is a very food here...",
		userName: "gauravgarg"
	}
]

const menuItmArr = [
	{
		text: "Report",
		id: 1
	},
	{
		text: "Share",
		id: 2
	}
]
export default function Home(props) {
	const [addComment, setAddComment] = React.useState("")
	const [menuVal, setMenuVal] = React.useState("")

	console.log("menuValmenuVal", menuVal)
	return (
		<ScrollView style={styles.loginMain}>
			<Provider>
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
										<DotMenu
											key={i + 1}
											isLike_you={item.isLike_you}
											menuItmArr={menuItmArr}
											setMenuVal={setMenuVal}
											menuVal={menuVal}
											navigation={props.navigation}
										/>
									</View>

									<View style={styles.postImageVideo}>
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
											item.imgSrc != [] && item.imgSrc.length > 0 &&
											<>
												{
													item.imgSrc.length > 1 ?
														<MyCarousel imagesData={item.imgSrc}  isUploadImage= {false} />
														:
														<Image
															style={styles.sliderImage}
															source={item.imgSrc[0]}
														/>

												}
											</>

										}
									</View>
									<View style={styles.profileDetail}>
										<View style={styles.iconContentPost}>
											<EntypoIcon name={item.isLike_you ? "heart" : "heart-outlined"} size={20} style={styles.heartIcon} />
										</View>
										<View style={styles.iconContentPost}>
											<FontAwesomeIcon name="comment-o" size={20} style={styles.commentIcon}
												onPress={() =>
													props.navigation.navigate('CustomCommentList',
														{
															commentListing: item.commentList,
															setAddComment: setAddComment,
															addComment: addComment
														}

													)}
											/>
										</View>
										<View style={styles.iconContentPost}>
											<FontAwesomeIcon name={"share-square-o"} size={20} style={styles.shareIcon} />
										</View>
									</View>
									{
										item.likeCount != 0 &&
										<View style={styles.profileDetail}>
											<Text style={styles.titleTextPost}>{item.likeCount} likes</Text>
										</View>
									}

									<View style={styles.profileDetail}>
										<Text style={styles.titleTextPost}>{item.title}</Text>
									</View>
									{
										(item.commentList && item.commentList.length > 0) ?
											<View style={styles.viewAllText} >
												<Text
													onPress={() =>
														props.navigation.navigate('CustomCommentList',
															{
																commentListing: item.commentList,
																setAddComment: setAddComment,
																addComment: addComment
															}

														)}
												>
													View all {item.commentList.length} comments
												</Text>

											</View>
											: null
									}

								</View>
							</>
						})
						:
						<></>
				}
			</Provider>


		</ScrollView>
	)
}

const styles = StyleSheet.create({
	loginMain: {
		backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
		paddingTop: 20,

	},
	postDetail: {
		marginBottom: 10
	},

	profileDetail: {
		flexDirection: "row",
		marginBottom: 2,
		width: vw * 80,
		marginHorizontal: vw * 2,
		alignItems: "center",

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
		backgroundColor: 'red',
		width: vw * 10,
	},
	sliderImage: {
		width: width,
		height: 350,
	},
	backgroundVideo: {
		width: width,
		height: vh * 40,
	},
	postImageVideo: {
		marginBottom: 10
	},
	iconContentPost: {
		marginRight: 10,
	},
	viewAllText: {
		marginBottom: 10,
		color: "#9aa0a6",
		width: vw * 80,
		marginHorizontal: vw * 2
	},
	titleTextPost: {
		fontWeight: "600",
		color: "#000"
	}
})