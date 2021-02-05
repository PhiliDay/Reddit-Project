import React, { useState, useEffect } from 'react';
import { Text, Button, TouchableOpacity, StyleSheet, View, TextInput } from "react-native";
import styles from "../styles"

const HomeScreen = ({ navigation }) => {
    const [text, setText] = useState('')

    return (
        <View style={styles.content}>
            <Text style={styles.title}> Welcome!</Text>
            <Text style={styles.text}> React Native App</Text>
            <Text style={styles.text}> Enter which subreddit you would like to see:</Text>
            <TextInput 
            style={styles.text}
            placeholder = "Enter Value Here"
            placeholderTextColor = "#9a73ef"
            value={text}
            onChangeText={(newValue)=> {
                setText(newValue);
            }}
            />
            <Text> {text} </Text>
            <TouchableOpacity 
            style={styles.screenButton}
            onPress={() => {
                navigation.navigate('Cute', {
                  text: text
                });
            }}>
            <Text style={styles.buttonText}>View some cute animals</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.screenButton}
            onPress={() => {
                navigation.navigate('Football');
            }}>
            <Text style={styles.buttonText}>View some football</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;

// TODO:
// API CLIENT AND TESTS
// INPUT PRODUCES REDDIT SUBREDDIT
// STYLE