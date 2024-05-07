import { Image } from "react-native";

function Logo (props) {
  return (

    <Image source={require('../../../assets/images/global/logo.png')} style={{width: 193, height: 193, tintColor: props.cor}} />

  )
}

export default Logo;