import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
const Cronograma = ({ cronograma }) => {

    return (

        <View>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('telaVisualizarEvento')}>
                <View >
                    <Text style={styles.titulos}>{cronograma.nome}</Text>
                    <View style={styles.containerTitulo}>
                        <Image style={styles.iconCard} source={require('../../../../assets/images/global/icon-data.png')} />
                        <Text style={styles.subTitulos}>Data: <Text>{cronograma.data}</Text></Text>
                    </View>
                    <View style={styles.containerTitulo}>
                        <Image style={styles.iconCard} source={require('../../../../assets/images/global/icon-maps.png')} />
                        <Text style={styles.subTitulos}>Cidade: <Text>{cronograma.cidade.nome}</Text></Text>
                    </View>
                    <View style={styles.containerTitulo}>
                        <Text style={styles.subTitulos}><Image style={styles.iconCardDes} source={require('../../../../assets/images/global/icon-ponto.png')} />
                            Descrição: <Text>{cronograma.descricao}</Text>
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Cronograma;