import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const NewsArticleItem = ({navigation, item}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {
          details: item,
        })
      }>
      <View style={styles.container}>
        <Image source={{uri: item.urlToImage}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text numberOfLines={3}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
