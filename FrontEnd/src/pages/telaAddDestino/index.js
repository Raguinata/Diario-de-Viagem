import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/header';
import Footer from '../../components/footer';
import AddDestino from '../../components/addDestino';
import CardViagem from '../../components/cardViagem';

const { width: screenWidth } = Dimensions.get('window');

const TelaAddDestino = ({ navigation }) => {
    const scrollViewRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

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
                <View style={[styles.slide, { width: screenWidth }]}>
                    <AddDestino navigation={navigation} />
                </View>
                <View style={[styles.slide, { width: screenWidth }]}>
                    <CardViagem navigation={navigation} />
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
