import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import RestaurantsList from '../components/RestaurantsList';
import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterResultByPrice = (price) => {
    return restaurants.filter((restaurant) => restaurant.price === price);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We've found {restaurants.length} results</Text>
      <RestaurantsList
        title='Cost Effective'
        restaurants={filterResultByPrice('$')}
      />
      <RestaurantsList
        title='Bit Pricier'
        restaurants={filterResultByPrice('$$')}
      />
      <RestaurantsList
        title='Big Spender'
        restaurants={filterResultByPrice('$$$')}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default SearchScreen;
