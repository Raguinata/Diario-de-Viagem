import { Image } from "react-native";

function pontoInterrogacao (props) {
  return (

    <Image source={require('../../../assets/images/global/interrogacao.png')} style={{width: props.largura, height: props.altura, tintColor: props.cor, margin: props.margem}} />

  )
}

export default pontoInterrogacao;