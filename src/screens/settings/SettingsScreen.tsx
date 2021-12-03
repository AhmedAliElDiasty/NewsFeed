import React from 'react'
import { I18nManager, SafeAreaView, View } from 'react-native'
import { Switch, Text } from 'react-native-paper'
import { Props } from '../../../App'
import { Radio } from '../../components/radio/radio'
import { color } from '../../utils/colors'
import { saveString } from '../../utils/storage/storage'
import i18n from "i18n-js"
import RNRestart from "react-native-restart"
import { translate } from '../../i18n'
import { styles } from './styles'


export const SettingsScreen = ({ navigation }: Props) => {
  const key = "lang"

  const ar = async () => {
    await saveString(key, "ar")
    I18nManager.forceRTL(true)
    I18nManager.allowRTL(true)
    i18n.locale = "ar"
    RNRestart.Restart()
  }
  const en = async () => {
    await saveString(key, "en")
    i18n.locale = "en"
    I18nManager.forceRTL(false)
    I18nManager.allowRTL(false)
    RNRestart.Restart()
  }

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <SafeAreaView />
      <Text style={styles.languageTitle}>{translate('settings.language')}</Text>
      <Radio
        style={{
          justifyContent: "flex-start",
          backgroundColor: "transparent",
        }}
        labelStyle={{ fontSize: 16, color: color.switchBlue, lineHeight: 20 }}
        text="عربي"
        active={I18nManager.isRTL}
        onActive={ar}
      />
      <Radio
        style={{ justifyContent: "flex-start", backgroundColor: "transparent" }}
        labelStyle={{ fontSize: 16, color: color.switchBlue, lineHeight: 20 }}
        text="English"
        active={!I18nManager.isRTL}
        onActive={en}
      />
      <SafeAreaView />
    </View>
  );

}