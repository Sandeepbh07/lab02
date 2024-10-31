import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const transactions = [
    { id: '1', name: 'Groceries', amount: 50, date: '2023-10-01' },
    { id: '2', name: 'Rent', amount: 500, date: '2023-10-01' },
    { id: '3', name: 'Utilities', amount: 150, date: '2023-10-02' },
];

export default function SummaryScreen() {
    const totalExpenses = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
    
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Summary</Text>
            <View style={styles.summaryContainer}>
                <Text style={styles.summaryLabel}>Total Expenses:</Text>
                <Text style={styles.summaryValue}>${totalExpenses}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
    },
    summaryContainer: {
        padding: 16,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    summaryLabel: {
        fontSize: 18,
        color: '#555',
    },
    summaryValue: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
});
