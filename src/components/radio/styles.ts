import {StyleSheet} from 'react-native';
import {color} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: color.border,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 4,
  },
  radio_button: {
    height: 16,
    width: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
  },
  label: {
    paddingHorizontal: 8,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
  },
  active_view: {
    height: 6,
    width: 6,
    margin: 20,
    borderRadius: 3,
  },
});
