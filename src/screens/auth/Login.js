import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import React, {useState} from 'react'
import CustomTextInput from '../../common/CustomTextInput'
import theme from '../../styles/theme.style';
import CustomButton from '../../common/CustomButton';

const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {

  }

  return (
    <View style={styles.loginMain}>
      <Text style={styles.heading}>Login</Text>
      <CustomTextInput
        placeholder="Email or Username"
        setValue={setEmail}
      />
      <CustomTextInput
        placeholder="Password"
        isPassword={true}
        setValue={setPassword}
      />
      <CustomButton
        btnText="Login"
        handleSubmit={()=>handleSubmit()}
      />
      <View style={styles.bottomTextContent}>
        <Text style={styles.bottomText}>
          Don't have account? Signup
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  heading:{
    marginLeft: 20
  },
  loginMain: {
    backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
    height: height,
    width: width,
    flexDirection: 'column',
    justifyContent: 'center',
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