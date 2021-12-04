import * as React from "react"
import { View, ViewProps, TouchableWithoutFeedback, TextStyle } from "react-native"
import { Text } from "react-native-paper"
import { styles } from "./styles"
import { useTheme } from '@react-navigation/native';


export interface RadioProps extends ViewProps {
  active?: boolean
  label?: string
  onActive?: (active?: boolean) => void
  disabled?: boolean
  text?: string
  labelStyle?: TextStyle
}

/**
 * Describe your component here
 */
export const Radio: React.FC<RadioProps> = (props) => {
  const { active, label, text, style, onActive, disabled, labelStyle } = props
  const { colors } = useTheme();
  return (
    <TouchableWithoutFeedback
      disabled={disabled}
      onPress={!active ? () => onActive(!active) : undefined}
    >
      <View style={[styles.container, style]}>
        <View style={[styles.radio_button, { borderColor: active ? colors.notification : "grey" }]}>
          <View
            style={{
              ...styles.active_view,
              backgroundColor: active ? colors.notification : "",
              // borderWidth: active ? 3 : 1.5,
              margin: 110
            }}
          />
        </View>
        {(!!label || !!text) && (
          <Text style={[styles.label, { color: active ? colors.notification : "grey" }, labelStyle]} >
            {text}
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}
