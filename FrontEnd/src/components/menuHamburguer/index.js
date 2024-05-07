import { Image } from "react-native";

function menuHamburguer (props) {
  return (

    <Image source={require('../../../assets/images/global/menu-hamburguer.png')} style={{width: props.largura, height: props.altura, tintColor: props.cor, margin: props.margem}} />

  )
}

export default menuHamburguer;