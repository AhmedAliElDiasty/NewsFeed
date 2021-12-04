import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 4,
    marginVertical: 5,
    marginHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#666',
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    width: '35%',
    height: 80,
    borderRadius: 15,
    margin: 5,
    backgroundColor: 'white',
  },
  textContainer: {
    width: '60%',
    paddingRight: 10,
    paddingLeft: 3,
  },
});
