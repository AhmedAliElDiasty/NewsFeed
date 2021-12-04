import moment, { MomentInput } from 'moment';
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { translate } from '../../i18n';
import { Article } from '../../interfaces/newsTypes';
import { styles } from './styles';
import { useTheme } from '@react-navigation/native';

interface MyProps {
  route: {
    params: {
      details: Article
    }
  }
}

export const DetailsScreen = ({ route }: MyProps) => {
  const { details } = route.params;
  const { colors } = useTheme();
  return (
    <ScrollView style={styles.container}>
      <Image
        resizeMethod="scale"
        style={styles.image}
        source={{ uri: details.urlToImage }}
      />
      {details.author &&
        <View style={styles.contentContainer}>
          <Text style={[styles.author, { color: colors.text }]}>{translate("details.author")} {details.author}</Text>
        </View>
      }
      <View style={styles.contentContainer}>
        <Text style={[styles.titleText, { color: colors.text }]}>{details.title}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={[styles.descriptionText, { color: colors.text }]}>{details.description}</Text>
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
        <Text style={[styles.publishedAt, { color: colors.text }]}>
          {translate('details.publishedAt')}
          {moment(details.publishedAt as MomentInput).format('MMMM Do YYYY, h:mm:ss a')}
        </Text>
      </View>
    </ScrollView>
  );
};
