import React, { useState, useEffect } from 'react';
import { Text, Button, StyleSheet, View, TextInput } from "react-native";
import APIClient from "../APIClient"
import { CommonActions } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
    const [text, setText] = useState('')

    return (
        <View>
            <Text style={styles.text}> React Native App!!!!!</Text>
            <Text> Enter subreddit you would like to see:</Text>
            <TextInput 
                value={text}
                onChangeText={(newValue)=> setText(newValue)}/>
            <Text> {text} </Text>
            <Button 
            title ="Go to list demo"
            onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('List', {
                  text: 'anything you want here'
                });
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
});

export default HomeScreen;

// TODO:
// API CLIENT AND TESTS
// INPUT PRODUCES REDDIT SUBREDDIT
// STYLE