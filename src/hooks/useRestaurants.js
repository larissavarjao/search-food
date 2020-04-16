import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'San Jose',
        },
      });
      setRestaurants(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, restaurants, errorMessage];
};
