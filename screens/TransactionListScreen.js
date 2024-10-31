import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const transactions = [
    { id: '1', name: 'Groceries', amount: 50, date: '2023-10-01' },
    { id: '2', name: 'Rent', amount: 500, date: '2023-10-01' },
    { id: '3', name: 'Utilities', amount: 150, date: '2023-10-02' },
];

export default function TransactionListScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={styles.transactionItem} 
                        onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
                    >
                        <View>
                            <Text style={styles.transactionName}>{item.name}</Text>
                            <Text style={styles.transactionAmount}>${item.amount}</Text>
                            <Text style={styles.transactionDate}>{item.date}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        padding: 16,
    },
    transactionItem: {
        backgroundColor: '#ffffff',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    transactionName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    transactionAmount: {
        fontSize: 16,
        color: '#666',
    },
    transactionDate: {
        fontSize: 14,
        color: '#aaa',
    },
});
