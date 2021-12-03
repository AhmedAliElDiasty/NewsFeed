import Axios from 'axios';
import {Api_key} from '../utils/urls.json';
// import {ErrorType, ServerError} from '../utils/Errors';

export const getNewsApi = async () => {
  try {
    const res = await Axios.get(
      `https://newsapi.org/v2/everything?q=tesla&from=2021-11-03&sortBy=publishedAt&apiKey=${Api_key}`,
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  }
};
