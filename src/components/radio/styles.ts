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
    height: 22,
    width: 22,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  label: {
    paddingHorizontal: 8,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
  },
  active_view: {
    height: 15,
    width: 15,
    borderRadius: 14,
    borderWidth: 3,
    borderColor: color.switchBlue,
  },
});
