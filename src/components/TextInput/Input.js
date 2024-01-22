import React from 'react';
import {View, StyleSheet, Image, TextInput, Text} from 'react-native';
import Colors from '../../common/Colors';

export default function Input(props) {
  const {
    value,
    placeholder,
    onChangeText,
    containerStyle,
    inputStyle,
    multiline,
    keyboardType,
    editable,
    secureTextEntry,
  } = props;
  return (
    <View style={{...styles.container, ...containerStyle}}>
      <View>
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor={Colors.neutralGrey}
          onChangeText={onChangeText}
          style={{...styles.input, ...inputStyle}}
          multiline={multiline}
          autoCapitalize={'none'}
          editable={editable}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: Colors.White,
    marginTop: 10,
    borderRadius: 5,
  },
  input: {
    height: 50,
    color: Colors.neutralGrey,
  },
});
