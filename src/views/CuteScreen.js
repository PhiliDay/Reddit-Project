import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Linking } from 'react-native';
import APIClient from '../APIClient';
import styles from "../styles"

const CuteScreen = ({ route, navigation }) => {

    const [loadedPost, setLoadedPost] = useState([]);
    const text = navigation.getParam('text');

    useEffect(() => {
        apiClient = new APIClient();
        const promise = apiClient.load("r/" + text)
            .then(setLoadedPost)
            .catch(console.error)
            .finally(() => console.log("Completed Loading"));

        return () => {
            console.log("This will be logged on unmount");
        }
    });

    return (
        <FlatList 
         keyExtractor={(post, index) => index}
         data={loadedPost} 
         renderItem={({item}) => {
         return <View>
             <Text style={styles.textStyle}
             onPress={() => Linking.openURL(item.url)}
             >{item.title}</Text>
             <Image source={{uri: item.thumbnail}} style={styles.imageView}/>
             </View>
         }}
        />
    );
};

export default CuteScreen;


//Flatlist - takes an array into a list of elements - have to pass in data