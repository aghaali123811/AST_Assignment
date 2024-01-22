import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../../common/Colors';

export default function Btn(props) {
  const {onPress, containerStyle, titleStyle, btnTitle, icon} = props;
  return (
    <TouchableOpacity
      style={{...styles.container, ...containerStyle}}
      onPress={onPress}>
      <Text allowFontScaling={false} style={{...styles.title, ...titleStyle}}>
        {btnTitle}
      </Text>
      {icon && <Image style={styles.img} source={icon} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 50,
    marginTop: 10,
    backgroundColor: Colors.Orange,
    borderRadius: 5,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 18,
    color: Colors.White,
  },
  img: {
    alignSelf: 'center',
    marginHorizontal: 10,
    width: 20,
    height: 20,
    marginTop: 3,
  },
});
