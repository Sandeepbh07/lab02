import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionListScreen from './screens/TransactionListScreen';
import TransactionDetailScreen from './screens/TransactionDetailScreen';
import SummaryScreen from './screens/SummaryScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function TransactionsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TransactionList" component={TransactionListScreen} options={{ title: '' }} />
            <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} options={{ title: 'Transaction Detail' }} />
        </Stack.Navigator>
    );
}

function AppTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Transactions" component={TransactionsStack} />
            <Tab.Screen name="Summary" component={SummaryScreen} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <AppTabs />
        </NavigationContainer>
    );
}
