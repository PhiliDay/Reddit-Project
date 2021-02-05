import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, Linking } from 'react-native';
import APIClient from '../APIClient';
import styles from "../styles"

const ListScreen = ({ navigation }) => {

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
         keyExtractor={(post, index) => index.toString()}
         data={loadedPost} 
         renderItem={({item}) => {
         return <View>
             <Text style={styles.textStyle}
             onPress={() => Linking.openURL(item.url)}
             >{item.title}</Text>
             <Image source={ item.thumbnail != "self" ? {uri: item.thumbnail} : require('../assets/placeholder.png')} style={styles.imageView}/>
             </View>
         }}
        />
    );
};

export default ListScreen;


