import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import PostScreen from '../screens/PostScreen';
import { render } from 'react-dom';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
        <Stack.Navigator initialRoutName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen name="PostScreen" component={PostScreen} />
        </Stack.Navigator>
    )   
}

export default StackNavigator;