import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá, visitante!</Text>
            <Text style={styles.text}>Você acabou de navegar para esta página.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF0F5',
    },
    title: {
        color: '#CD5C5C',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        color: '#CD5C5C',
        fontSize: 18,
    },
});