import React from 'react';
import Logo from './src/components/logo';
import BotaoBranco from './src/components/botaoBranco';
import Input from './src/components/input';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/images/telaInicial/background-image.png')}
        style={styles.imagemFundo}>
      </ImageBackground>
      <View style={styles.overlayPreto}></View>
      <View style={styles.conteudo}>
        <View style={styles.header}>
        <Logo cor={'black'} />
          <Text style={styles.title}>Bem-Vindo(a) de volta!</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.Inputs}>
            <Text style={styles.title}>Email:</Text>
            <Input value={undefined} onChangeText={undefined}/>
          </View>
          <View style={styles.Inputs}>
            <Text style={styles.title}>Senha:</Text>
            <Input value={undefined} onChangeText={undefined}/>
          </View>
        </View>
        <View style={styles.footer}>
          <BotaoBranco texto={'Login'} onPress={undefined} estilo={styles.botaoCinza} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  imagemFundo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  conteudo: {
    width: '95%',
    height: '95%',
    borderRadius: 20,
    backgroundColor: 'white',
  },

  header: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },

  title: {
    fontSize: 12,
    textAlign: 'center',
    width: '80%',
    margin: 10,
    color: 'black',
  },
  overlayPreto: {
    ...StyleSheet.absoluteFillObject, // ocupa toda a tela
    backgroundColor: 'rgba(0, 0, 0, 0.77)',
  },

  botaoCinza: {
    backgroundColor: '#D9D9D9',
  },

  
});

export default App;
