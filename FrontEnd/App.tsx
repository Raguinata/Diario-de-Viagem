import React from 'react';
import Logo from './src/components/logo';
import BotaoBranco from './src/components/botaoBranco';
import Input from './src/components/input';
import Ou from './src/components/ou';
import Icons from './src/components/icons';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

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
          <Input texto={'Email:'} value={undefined} onChangeText={undefined} />
          <Input texto={'Senha:'} value={undefined} onChangeText={undefined} />
          <Text style={styles.textoEsqueceuSenha}>Esqueceu sua senha?</Text>
          <BotaoBranco texto={'Login'} onPress={undefined} estilo={styles.botaoCinza} />
        </View>
        <View style={styles.footer}>
          <Ou />
          <Icons />
          <Text>
            Não tem uma conta?{' '}
            <Text style={{ color: 'blue', fontWeight: 'bold' }}>Cadastre-se</Text>
          </Text>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  footer: {
    width: '100%',
    height: 120,
    justifyContent: 'space-around',
    alignItems: 'center',
    
  },

  title: {
    fontSize: 16,
    textAlign: 'center',
    width: '80%',
    margin: 15,
    color: 'black',
  },

  textoEsqueceuSenha: {
    color: 'black',
    fontWeight: 'bold', 
    fontSize: 12, 
    textAlign: 'right', 
    width: '65%',
    marginBottom: 5,
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
