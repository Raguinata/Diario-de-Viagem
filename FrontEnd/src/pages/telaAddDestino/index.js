import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/header';
import Footer from '../../components/footer';
import AddDestino from '../../components/addDestino';
import CardViagem from '../../components/cardViagem';

const { width: screenWidth } = Dimensions.get('window');

const TelaAddDestino = ({ navigation, route }) => {
    const scrollViewRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [programas, setProgramas] = useState([]);
    const [usuario, setUsuario] = useState({});

    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / screenWidth);
        setCurrentIndex(index);
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            scrollViewRef.current.scrollTo({ x: currentIndex * screenWidth - screenWidth, animated: true });
        }
    };

    const handleNext = () => {
        if (currentIndex < 2) {
            setCurrentIndex(currentIndex + 1);
            scrollViewRef.current.scrollTo({ x: currentIndex * screenWidth + screenWidth, animated: true });
        }
    };

    const fetchProgramas = async (id) => {
        try {
            let res = await fetch(`http://localhost:8080/programa/listar/${id}`)
            res = await res.json();
            setProgramas(res);
        } catch (error) {
            console.log(error);
        }

    }

    const handleSetInfos = async () => {
        const { usuario } = await route.params;
        setUsuario(usuario);
        return usuario?.idUsuario;
    }

    useEffect(() => {
        handleSetInfos().then((id) => {
            fetchProgramas(id);
        });
    }, [])

    return (
        <View style={styles.container}>
            <Header titulo={'Minhas Viageens'} />
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >   
                {/*ATENÇÃO, A LISTAGEM NÃO ESTÁ DINÂMICA */}
                <View style={[styles.slide, { width: screenWidth }]}>
                    <AddDestino navigation={navigation} />
                </View>
                <View style={[styles.slide, { width: screenWidth }]}>
                    <CardViagem programa_infos={programas[0]} navigation={navigation} usuario_infos={usuario}/>
                </View>
                <View style={[styles.slide, { width: screenWidth }]}>
                    <AddDestino navigation={navigation} />
                </View>

            </ScrollView>
            <View style={styles.pagination}>
                <TouchableOpacity onPress={handlePrevious}>
                    <Text style={styles.paginationText}>Anterior</Text>
                </TouchableOpacity>
                <Text style={styles.paginationText}>{currentIndex + 1} / 3</Text>
                <TouchableOpacity onPress={handleNext}>
                    <Text style={styles.paginationText}>Próximo</Text>
                </TouchableOpacity>
            </View>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginBottom: 30,
    },
    paginationText: {
        fontSize: 16,
        color: 'black',
    },
});

export default TelaAddDestino;
