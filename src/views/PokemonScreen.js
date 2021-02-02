import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet, FlatList, Linking } from 'react-native';
import APIClient from '../APIClient';
import styles from "../styles";

const PokemonScreen = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
     fetchPokemons();
    },[]);

    const fetchPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
    .then(response => response.json())
    .then(pokemons => setPokemons(pokemons.results));
    };

return (
    <View>
      <View style={styles.searchCont}>
        <TextInput
          style={styles.searchfield}
          placeholder="Search Pokemons"
          onChangeText={value => setSearchfield(value)}
          value={searchfield}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          {pokemons
            .filter(pokemon =>
              pokemon.name.toLowerCase().includes(searchfield.toLowerCase())
            )
            .map((pokemon, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  style={styles.card}
                  onPress={() =>
                    props.navigation.navigate('Details', {
                      pokemon: pokemon.name,
                    })
                  }>
                  <Image
                    style={{width: 150, height: 150}}
                    source={{
                      uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
                        pokemon.name
                      }.png`,
                    }}
                  />
                  <Text>{pokemon.name}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default PokemonScreen;
