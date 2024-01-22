import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../common/Colors';
import ImagePath from '../../common/ImagePath';

export default function Header(props) {
  const {containerStyle, BackBtn, SearchBtn, Title} = props;
  return (
    <>
      <View style={{...styles.container, ...containerStyle}}>
        {BackBtn ? (
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => props.navigation.goBack()}>
            <Image style={styles.Image} source={ImagePath.backBtn} />
          </TouchableOpacity>
        ) : null}
        <Text style={styles.txt}>{Title}</Text>
        {SearchBtn ? (
          <TouchableOpacity style={styles.searchBtn}>
            <Image style={styles.Image} source={ImagePath.searchBtn} />
          </TouchableOpacity>
        ) : null}

        <View />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 54,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? 40 : 0,
    backgroundColor: Colors.Orange,
    justifyContent: 'center',
  },
  txt: {
    fontSize: 26,
    alignSelf: 'center',
    fontWeight: '900',
    color: Colors.White,
  },
  Image: {
    width: 30,
    height: 30,
  },
  backBtn: {
    position: 'absolute',
    left: 10,
    top: 12,
  },
  searchBtn: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
});
