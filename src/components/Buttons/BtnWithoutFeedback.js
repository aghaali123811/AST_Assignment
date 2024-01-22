import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../common/Colors';

export default function BtnWithoutFeedback(props) {
  const {onPress, containerStyle, title} = props;
  return (
    <View style={{...styles.container, ...containerStyle}}>
      <Text allowFontScaling={false} style={styles.title}>
        {title}
      </Text>
      <Text allowFontScaling={false} style={styles.content}>
        {'---'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
    alignSelf: 'center',
    height: 30,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    borderBottomWidth: 1,
  },
  title: {
    color: Colors.neutralGrey,
    left: 10,
    fontWeight: '600',
    fontSize: 14,
  },
  content: {
    position: 'absolute',
    right: 10,
    fontWeight: '600',
    fontSize: 14,
  },
});
