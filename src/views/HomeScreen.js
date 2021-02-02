import React, { useState, useEffect } from 'react';
import { Text, Button, StyleSheet, View, TextInput } from "react-native";
import styles from "../styles"

const HomeScreen = ({ navigation }) => {
    const [text, setText] = useState('')

    return (
        <View>
            <Text style={styles.text}> React Native App!!!!!</Text>
            <Text> {text} </Text>
            <Button 
            title ="View some cute animals"
            onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Cute', {
                  text: text
                });
            }}
            />
            <Button
            title ="View some football"
            onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Football', {
                  text: text
                });
            }}
            />
        </View>
    );
};

export default HomeScreen;

// TODO:
// API CLIENT AND TESTS
// INPUT PRODUCES REDDIT SUBREDDIT
// STYLE