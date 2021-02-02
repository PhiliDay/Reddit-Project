import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Linking } from 'react-native';
import APIClient from '../APIClient';

const CuteScreen = ({ route, navigation }) => {
    const text = navigation.getParam('text');
    const [loadedPost, setLoadedPost] = useState([]);
    const redditText = JSON.stringify(text);

    useEffect(() => {
        apiClient = new APIClient();
        apiClient.load("r/aww").then(setLoadedPost);

        return () => {
            console.log("This will be logged on unmount");
        }
    });

    return (
        <FlatList 
        keyExtractor={(post, index) => index}
         data={loadedPost} 
         renderItem={({item}) => {
         return    <View>
             <Text style={styles.textStyle}
             onPress={() => Linking.openURL(item.url)}
             >{item.title}</Text>
             <Image source={{uri: item.thumbnail}} style={styles.imageView}/>
             </View>
         }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    }, 
    imageView: {
        width: '75%',
        height: 200 ,
        margin: 0,
        borderRadius : 7
     
    }
})

export default CuteScreen;


//Flatlist - takes an array into a list of elements - have to pass in data