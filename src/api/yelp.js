import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 6b4k9VNAtYwe56Iy4LRckNa_Mji2jzMoEKCqdzWDP08zyiNIBOJsKjm5ky7jsmOOIQd4c1e91a22ZYj_xtTJcDuA7rXpevAI9DS3OxOyupGemeOEuoE8kYpW6f6WXnYx',
  },
});
