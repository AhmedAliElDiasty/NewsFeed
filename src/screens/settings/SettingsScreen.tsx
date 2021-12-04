import React, { useEffect, useState } from 'react'
import { Button, I18nManager, SafeAreaView, View } from 'react-native'
import { Text } from 'react-native-paper'
import { Props, ThemeContext } from '../../../App'
import { Radio } from '../../components/radio/radio'
import { saveString, storeTheme, getTheme } from '../../utils/storage/storage'
import i18n from "i18n-js"
import RNRestart from "react-native-restart"
import { translate } from '../../i18n'
import { styles } from './styles'
import { useTheme } from '@react-navigation/native';



export const SettingsScreen = ({ navigation }: Props) => {

  const { setTheme, theme } = React.useContext(ThemeContext);
  const { colors } = useTheme();


  const ar = async () => {
    await saveString("lang", "ar")
    I18nManager.forceRTL(true)
    I18nManager.allowRTL(true)
    i18n.locale = "ar"
    RNRestart.Restart()
  }
  const en = async () => {
    await saveString("lang", "en")
    i18n.locale = "en"
    I18nManager.forceRTL(false)
    I18nManager.allowRTL(false)
    RNRestart.Restart()
  }

  const light = async () => {
    setTheme('Light')
    await storeTheme('Light')
  }

  const dark = async () => {
    setTheme('Dark')
    await storeTheme('Dark')
  }


  return (
    <View style={{ paddingHorizontal: 10 }}>
      <SafeAreaView />
      <Text style={[styles.languageTitle, { color: colors.text }]}>{translate('settings.language')}</Text>
      <Radio
        style={{
          justifyContent: "flex-start",
          backgroundColor: "transparent",
        }}
        labelStyle={{ fontSize: 16, lineHeight: 20 }}
        text="عربي"
        active={I18nManager.isRTL}
        onActive={ar}
      />
      <Radio
        style={{ justifyContent: "flex-start", backgroundColor: "transparent" }}
        labelStyle={{ fontSize: 16, lineHeight: 20 }}
        text="English"
        active={!I18nManager.isRTL}
        onActive={en}
      />

      <Text style={[styles.languageTitle, { color: colors.text }]}>{translate('settings.themes')}</Text>
      <Radio
        style={{
          justifyContent: "flex-start",
          backgroundColor: "transparent",
        }}
        labelStyle={{ fontSize: 16, lineHeight: 20 }}
        text="light"
        active={theme == 'Light'}
        onActive={light}
      />
      <Radio
        style={{ justifyContent: "flex-start", backgroundColor: "transparent" }}
        labelStyle={{ fontSize: 16, lineHeight: 20 }}
        text="dark"
        active={theme == 'Dark'}
        onActive={dark}
      />
      <SafeAreaView />
    </View>
  );

}