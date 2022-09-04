import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/auth/Login'
import Registration from '../screens/auth/Registration'
import Welcome from '../Welcome';
import MyBottomTabs from './MyBottomTabs';
import CustomCommentList from '../common/CustomCommentList';
import MyCarousel from '../common/Carousel/MyCarousel';
import BottomPopUp from '../common/PopUP/BottomPopUp';
import CreatePost from '../screens/post/CreatePost';

const Stack = createStackNavigator();

export default function MyTabs() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true
            }}

        >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={Registration} />
            <Stack.Screen name="CustomCommentList" component={CustomCommentList} />
            <Stack.Screen name="MyCarousel" component={MyCarousel} />
            <Stack.Screen name="BottomPopUp" component={BottomPopUp} />
            <Stack.Screen name="CreatePost" component={CreatePost} />

            <Stack.Screen options={{headerShown: false}} name="Home" component={MyBottomTabs} />
        </Stack.Navigator>
    );
}