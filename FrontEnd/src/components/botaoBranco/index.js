import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

const BotaoBranco = ({ texto, onPress, estilo, icon, navigate }) => {
  return (
    <TouchableOpacity style={[styles.botao, estilo]} onPress={onPress}>
      <View style={styles.container}>
        {icon && <Image source={icon} style={styles.icon} />}
        <Text style={styles.textoBotao}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100, // Defina um valor alto para ter um botão redondo
    margin: 10,
    width: 240,
    height: 45,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10, // Espaço entre o ícone e o texto
    width: 15, // Ajuste de acordo com o tamanho do ícone
    height: 15, // Ajuste de acordo com o tamanho do ícone
  },
  textoBotao: {
    color: 'black',
    fontFamily: 'Outfit-VariableFont_wght',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default BotaoBranco;
