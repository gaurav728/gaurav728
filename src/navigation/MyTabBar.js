import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View, Text, TouchableOpacity } from 'react-native';

export default function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', paddingBottom:30,paddingTop:10 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        var iconName = "";
        if(label == "Home"){
          iconName = 'home';
        }
        if(label == "Search"){
          iconName = 'search';
        }
        if(label == "Favourites"){
          iconName = 'heart';
        }
        if(label == "Profile"){
          iconName = 'user';
        }
        if(label == "Post"){
          iconName = 'plus-circle';
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ textAlign: 'center' }}>
              <Icon name={iconName} size={30} color={isFocused ? '#f44a6a' : '#222'} />
            </Text>
            <Text style={{ color: isFocused ? '#f44a6a' : '#222', textAlign: 'center' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
