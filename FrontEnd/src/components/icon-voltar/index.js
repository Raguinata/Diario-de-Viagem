import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function IconVoltar(props) {
  const navigation = useNavigation();

  const handleVoltarPress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handleVoltarPress}>
      <Image
        source={require("../../../assets/images/global/icon-voltar.png")}
        style={{
          width: 80,
          height: 25,
          tintColor: props.cor,
          marginLeft: 20,
        }}
      />
    </TouchableOpacity>
  );
}

export default IconVoltar;
