import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Article } from '../../interfaces/newsTypes';
import { styles } from './styles';
import { useTheme } from '@react-navigation/native';


export const NewsArticleItem = ({ navigation, item }: { navigation: any, item: Article }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {
          details: item,
        })
      }>
      <View style={[styles.container, { backgroundColor: colors.border }]}>
        <Image source={{ uri: item.urlToImage }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={{
            color: colors.text
          }} numberOfLines={3}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
