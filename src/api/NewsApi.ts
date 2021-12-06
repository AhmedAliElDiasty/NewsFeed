import Axios from 'axios';
import {urls} from '../utils/urls';
import {NewsInterface} from '../interfaces/newsTypes';

export const getNewsApi: () => Promise<NewsInterface> = async () => {
  try {
    const res = await Axios.get(
      `https://newsapi.org/v2/everything?q=tesla&from=2021-11-06&sortBy=publishedAt&apiKey=${urls.Api_key}`,
    );
    return res.data;
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  }
};
