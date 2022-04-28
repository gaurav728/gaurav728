import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/auth/Login'
import Registration from '../screens/auth/Registration'
import Welcome from '../Welcome';
import MyBottomTabs from './MyBottomTabs';

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
            <Stack.Screen options={{headerShown: false}} name="Home" component={MyBottomTabs} />
        </Stack.Navigator>
    );
}