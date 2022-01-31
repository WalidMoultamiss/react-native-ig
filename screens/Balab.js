import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import {Divider} from "react-native-elements";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


const Balab = ({navigation}) => {
    return (
        <SafeAreaView>
            <View
                style={styles.topContainer}
            >
                <Image
                    source={require('../assets/bgTop.png')}
                    style={{ width: '100%', height: '30%' }}
                />
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        placeholderTextColor="#979797"
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <Divider width={1} orientation="vertical" />
                    <Text style={styles.subtitle}>
                        Balab is a place where you can find the bdsest food in the city.
                    </Text>
                </View>
                <View style={styles.cardsHeader}>
                    <Text style={styles.cardsTitle}>
                        The best food in the city
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Map')}
                    >
                    <Text style={styles.actionBtn}>
                        See all
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Balab;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '10%',
        borderRadius: 10,
        marginTop: '-10%',
    },
    topContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'column',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0000af',
    },
    subtitle: {
        fontSize: 20,
        color: '#0000af',
    },
    cardsHeader: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginTop: 30,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    actionBtn: {
        color: 'blue',
    },
    cardsTitle: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',
    },

});
