import { StyleSheet, Text, View, Dimensions } from 'react-native'
// import React from 'react'
import React, {Component} from 'react';
import { WebView } from 'react-native-webview';

const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

class Video extends Component {
  
 
    render()
    {
      return <View>
      <Text>ads</Text>
      
      <WebView
        style={styles.webView}
        // originWhitelist={['*']}
        source={{  uri: 'https://reactnative.dev/' }}
        resizeMode='cover'
      />
      <Text>ads</Text>
      </View>

  }
} 

export default Video;
const styles = StyleSheet.create({
  webView:{
      width:Dimensions.get("window").width/1.1,
      height:Dimensions.get("window").height/3.3,
      alignSelf: "center", 
      alignContent: "center",
      padding:10,
      borderRadius:5,
      marginBottom:15,
      backgroundColor:'#fff',
      shadowColor: "gray",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
  },
})





// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { WebView } from 'react-native-webview';

// // ...
//  export default class Video extends Component {
//   render() {
//     return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
//   }
// }


// import React, {Component} from 'react';
// import { WebView } from 'react-native-webview';
// import { StyleSheet, Text, View } from 'react-native';
 
// class Video extends Component {
  
 
//     render()
//     {
//       return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
//       <Text>Rajat</Text>

//   }
// } 
 
// // Exporting the component
// export default Video;