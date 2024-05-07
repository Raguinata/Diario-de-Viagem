import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MenuHamburguer from '../menuHamburguer';

const Footer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.conjuntoIcons}>
                <Image source={require('../../../assets/images/footer/home-icon.png')} style={{width: 18, height: 30, marginHorizontal: 30}}/>
                <Image source={require('../../../assets/images/footer/explorar-icon.png')} style={{width: 24, height: 30, marginHorizontal: 30}}/>
            </View>

            <View style={styles.brasil}>
                <Image source={require('../../../assets/images/footer/brasil-icon.png')} style={{width: 27, height: 26}}/>
            </View>

            <View style={styles.conjuntoIcons}>
                <Image source={require('../../../assets/images/footer/avisos-icon.png')} style={{width: 19, height: 30, marginHorizontal: 30}}/>
                <Image source={require('../../../assets/images/footer/perfil-icon.png')} style={{width: 16, height: 30, marginHorizontal: 30}}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 48,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },

    conjuntoIcons: {
        flexDirection: 'row',
    },

    brasil: {
        width: 60,
        height: 60,
        backgroundColor: '#D9D9D9',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: 'white',
        top: -22,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Footer;