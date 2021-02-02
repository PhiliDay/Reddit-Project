import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Linking } from 'react-native';
import APIClient from '../APIClient';
import styles from "../styles"

const FootballScreen = ({ route, navigation }) => {
    const [loadedPost, setLoadedPost] = useState([]);

    useEffect(() => {
        apiClient = new APIClient();
        apiClient.load("r/football").then(setLoadedPost);
        return () => {
            console.log("This will be logged on unmount");
        }
    });

    return (
        <FlatList 
         keyExtractor={(post, index) => index.toString()}
         data={loadedPost}
         renderItem={({item}) => {
         return <View>
             <Text style={styles.textStyle}
             onPress={() => Linking.openURL(item.url)}
             >{item.title}</Text>
             <Image source={ item.thumbnail != "self" ? {uri: item.thumbnail} : require('../assets/footballPlaceHolder.png')} style={styles.imageView}/>
         </View>
         }}
        />
    );
};

export default FootballScreen;


//Flatlist - takes an array into a list of elements - have to pass in data