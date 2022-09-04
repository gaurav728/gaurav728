import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import theme from '../../styles/theme.style';
import { Searchbar } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

const searchUserList = [
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

export default function SearchUser() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);


  return (
    <ScrollView style={styles.loginMain}>
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchCustom}
      />
      <View>
        {
          searchUserList.length > 0 &&
          searchUserList.map((item, i) => {
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
              </View>
            </>
          })
        }
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  loginMain: {
    backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
    paddingTop: 20,
    height: height
  },
  followsContentMain: {
    flexDirection: "row",
    marginTop: 10,
    width: vw * 80,
    alignItems: "center",
    marginHorizontal: vw * 2
  },
  followImage: {
    width: vw * 15,
    height: vw * 15,
    borderRadius: 50
  },
  userDetail: {
    width: vw * 75,
    paddingLeft: 15,
    paddingRight: 15
  },
})