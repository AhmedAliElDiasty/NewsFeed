import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  RefreshControl,
  TextInput,
  Text,
  I18nManager,
} from 'react-native';
import { Props } from '../../../App';
import { getNewsApi } from '../../api/NewsApi';
import { NewsArticleItem } from '../../components';
import { translate } from '../../i18n';
import { Article } from '../../interfaces/newsTypes';
import { styles } from './styles';


export const HomeScreen = ({ navigation }: Props) => {
  const [data, setData] = useState<Article[]>([]);
  const [filteredData, setFilteredData] = useState<Article[]>([]);
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
      <SafeAreaView />
      <TextInput
        value={searchValue}
        onChangeText={setSearchValue}
        style={styles.textInputStyles}
        placeholder={translate('home.search') as string}
        textAlign={I18nManager.isRTL ? 'right' : 'left'}
      />
      <FlatList
        data={searchValue ? filteredData : data}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={async () => {
              setRefresh(true)
              await getApi();
              setRefresh(false)
            }}
          />
        }
        renderItem={({ item, index }) => {
          return (
            <NewsArticleItem key={index} navigation={navigation} item={item} />
          );
        }}
      />
      <SafeAreaView />
    </View>
  );
};
