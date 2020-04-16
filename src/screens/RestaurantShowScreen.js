import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, FlatList, Image } from 'react-native';
import api from '../api/yelp';

const RestaurantShowScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState();
  const id = navigation.getParam('id');

  const getRestaurant = async (id) => {
    try {
      const restaurant = await api.get(`/${id}`);
      setRestaurant(restaurant.data);
    } catch (err) {}
  };

  useEffect(() => {
    getRestaurant(id);
  });

  if (!restaurant) {
    return null;
  }

  return (
    <View>
      <Text>{restaurant.name}</Text>
      <FlatList
        data={restaurant.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={style.image} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default RestaurantShowScreen;
