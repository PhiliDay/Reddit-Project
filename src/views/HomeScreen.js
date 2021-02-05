import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput } from "react-native";
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
            placeholderTextColor = "#dcdcdc"
            value={text}
            onChangeText={(newValue)=> {
                setText(newValue);
            }}
            />
            <TouchableOpacity 
            style={styles.screenButton}
            onPress={() => {
                navigation.navigate('List', {
                  text: text
                });
            }}>
            <Text style={styles.buttonText}>View the reddit posts</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
