import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Home from '../screens/home/Home'
import MyTabBar from './MyTabBar';
import Icon from 'react-native-vector-icons/Feather';
import Profile from '../screens/Profile/Profile';
import CustomHeader from './CustomHeader';
import SearchUser from '../screens/Search/SearchUser';
import CreatePost from '../screens/post/CreatePost';

const Tab = createBottomTabNavigator();

export default function MyBottomTabs() {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen
        options={({ navigation, route }) => ({
          headerTitle: props => <CustomHeader title="Home" back={false} navigation={navigation} {...props} />,
        })}
        // options={{ headerTitle: (props) => <CustomHeader title="Home" {...props} /> }}
        name="Home" component={Home} />
      <Tab.Screen
        options={({ navigation, route }) => ({
          headerTitle: props => <CustomHeader title="Search" back={true} navigation={navigation} {...props} />,
        })}
        name="Search" component={SearchUser} />
      <Tab.Screen
        options={({ navigation, route }) => ({
          headerTitle: props => <CustomHeader title="Favourites" back={true} navigation={navigation} {...props} />,
        })}
        name="Favourites" component={Home} />
      <Tab.Screen
        options={({ navigation, route }) => ({
          headerTitle: props => <CustomHeader title="Profile" back={true} navigation={navigation} {...props} />,
        })}
        name="Profile" component={Profile} />
        <Tab.Screen
        options={({ navigation, route }) => ({
          headerTitle: props => <CustomHeader title="Post" back={true} navigation={navigation} {...props} />,
        })}
        name="Post" component={CreatePost} />
    </Tab.Navigator>
  );
}