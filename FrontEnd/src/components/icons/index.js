import { Image, View } from "react-native";

function icons (props) {
  return (

    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../../../assets/images/global/google-icon.png')} style={{width: 25, height: 25, margin: 5}} />
        <Image source={require('../../../assets/images/global/facebook-icon.png')} style={{width: 25, height: 25, margin: 5}} />
    </View>

  )
}

export default icons;