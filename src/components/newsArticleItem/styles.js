import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // padding: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    width: '35%',
    height: 80,
    borderRadius: 15,
    margin: 5,
  },
  textContainer: {
    width: '60%',
  },
});
