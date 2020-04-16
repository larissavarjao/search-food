import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RestaurantDetail = ({ restaurant }) => {
  return (
    <View style={style.container}>
      <Image style={style.image} source={{ uri: restaurant.image_url }} />
      <Text style={style.name}>{restaurant.name}</Text>
      <Text>
        {restaurant.rating} Stars, {restaurant.review_count} Reviews
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default RestaurantDetail;
