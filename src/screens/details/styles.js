import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marign: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'red',
  },
  image: {
    width: '100%',
    height: 200,
  },
  author: {
    textAlign: 'left',
  },
  contentContainer: {
    margin: 10,
  },
  titleText: {
    fontSize: 20,
    color: '#000',
  },
  descriptionText: {
    fontSize: 17,
    color: '#222',
  },
  linkContainer: {
    alignSelf: 'center',
  },
  link: {
    color: '#841584',
  },
  publishedAt: {
    textAlign: 'right',
  },
});
