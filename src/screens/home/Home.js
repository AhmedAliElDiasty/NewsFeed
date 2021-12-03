import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  RefreshControl,
  TextInput,
  Text,
} from 'react-native';
import {getNewsApi} from '../../api/NewsApi';
import {NewsArticleItem} from '../../components';
import {styles} from './styles';

export const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const getApi = async () => {
    try {
      const response = await getNewsApi();
      if (response.status == 'ok') setData(response.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
    const filterData = data.filter(item => item.title.includes(searchValue));
    setFilteredData(filterData);
    console.log(filterData);
  }, [searchValue]);

  return (
    <View style={styles.container}>
      <TextInput
        value={searchValue}
        onChangeText={setSearchValue}
        style={styles.textInputStyles}
      />
      <FlatList
        data={searchValue ? filteredData : data}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={async () => {
              await getApi();
            }}
          />
        }
        renderItem={({item, index}) => {
          return (
            <NewsArticleItem key={index} navigation={navigation} item={item} />
          );
        }}
      />
      <SafeAreaView />
    </View>
  );
};
