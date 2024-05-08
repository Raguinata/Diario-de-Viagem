import { Image } from "react-native";

function iconVoltar (props) {
  return (

    <Image source={require('../../../assets/images/global/icon-voltar.png')} style={{width: 80, height: 25, tintColor: props.cor, marginLeft: 20}} />

  )
}

export default iconVoltar;