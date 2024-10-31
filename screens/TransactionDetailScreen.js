import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionDetailScreen({ route }) {
    const { transaction } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.detailContainer}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.value}>{transaction.name}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.label}>Amount:</Text>
                <Text style={styles.value}>${transaction.amount}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.label}>Date:</Text>
                <Text style={styles.value}>{transaction.date}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f8f8',
    },
   
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    label: {
        fontSize: 18,
        color: '#555',
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});
