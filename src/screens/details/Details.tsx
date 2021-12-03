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
import { Props } from '../../../App';
import { translate } from '../../i18n';
import { Article } from '../../interfaces/newsTypes';
import { styles } from './styles';

interface MyProps {
  route: {
    params: {
      details: Article
    }
  }
}

export const DetailsScreen = ({ route }: MyProps) => {
  const { details } = route.params;
  return (
    <ScrollView style={styles.container}>
      <Image
        resizeMethod="scale"
        style={styles.image}
        source={{ uri: details.urlToImage }}
      />
      {details.author &&
        <View style={styles.contentContainer}>
          <Text style={styles.author}>{translate("details.author")} {details.author}</Text>
        </View>
      }
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>{details.title}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.descriptionText}>{details.description}</Text>
      </View>
      <View style={styles.contentContainer}>
        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() =>
            Linking.canOpenURL(details.url).then(supported => {
              console.log(supported, '????');
              if (supported) {
                Linking.openURL(details.url);
              } else {
                console.log("Don't know how to open URI: " + details.url);
              }
            })
          }
          accessibilityLabel="Learn more about this purple button">
          <Text style={styles.link}>{translate('details.learnMore')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Text style={[styles.descriptionText, styles.publishedAt]}>
          {translate('details.publishedAt')}
          {moment().calendar('MMMM DDDD YYYY', details.publishedAt)}
        </Text>
      </View>
    </ScrollView>
  );
};
