import moment from 'moment';
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  Button,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';

export const DetailsScreen = ({navigation, route}) => {
  const item = route.params.details;
  return (
    <ScrollView style={styles.container}>
      <Image
        resizeMethod="scale"
        style={styles.image}
        source={{uri: item.urlToImage}}
      />
      <View style={styles.contentContainer}>
        <Text>Author: {item.author}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
      <View style={styles.contentContainer}>
        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() =>
            Linking.canOpenURL(item.url).then(supported => {
              console.log(supported, '????');
              if (supported) {
                Linking.openURL(item.url);
              } else {
                console.log("Don't know how to open URI: " + item.url);
              }
            })
          }
          accessibilityLabel="Learn more about this purple button">
          <Text style={styles.link}>Learn More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Text style={[styles.descriptionText, styles.publishedAt]}>
          published at:
          {moment().calendar('MMMM DDDD YYYY', item.publishedAt)}
        </Text>
      </View>
    </ScrollView>
  );
};
