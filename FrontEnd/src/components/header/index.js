import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MenuHamburguer from '../menuHamburguer';

const Header = ({titulo}) => {
    return (
        <View style={styles.container}>
            <MenuHamburguer largura={20} altura={17} cor={'black'} margem={undefined}/>
            <Text style={styles.tituloHeader}>{titulo}</Text>
            <Image source={require('../../../assets/images/global/header-icon.png')} style={{width: 28, height: 28}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 65,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    tituloHeader: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
});

export default Header;