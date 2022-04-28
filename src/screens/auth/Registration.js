import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import React, {useState} from 'react'
import CustomTextInput from '../../common/CustomTextInput'
import theme from '../../styles/theme.style';
import CustomButton from '../../common/CustomButton';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function Registration() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {

  }

  return (
    <ScrollView style={styles.loginMain}>
      <Text style={styles.heading}>Sign Up</Text>
      <CustomTextInput
        placeholder="First Name"
        setValue={setEmail}
      />
      <CustomTextInput
        placeholder="Last Name"
        setValue={setEmail}
      />
      <CustomTextInput
        placeholder="Email or Username"
        setValue={setEmail}
      />
      <CustomTextInput
        placeholder="Phone"
        setValue={setEmail}
      />
      <CustomTextInput
        placeholder="Password"
        isPassword={true}
        setValue={setPassword}
      />
      <CustomTextInput
        placeholder="Confirm Password"
        isPassword={true}
        setValue={setPassword}
      />
      <CustomButton
        btnText="Sign Up"
        handleSubmit={()=>handleSubmit()}
      />
      <View style={styles.bottomTextContent}>
        <Text style={styles.bottomText}>
          Already have an account? Login
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  heading:{
    marginHorizontal: 20
  },
  loginMain: {
    backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
    // width: width,
    // minHeight:height,
    paddingTop:20,

  },
  bottomTextContent:{
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20
  },
  bottomText:{
    color: theme.PRIMARY_COLOR
  }
})