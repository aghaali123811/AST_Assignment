import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBG,
  },
  btn: {
    backgroundColor: Colors.Orange,
    width: 180,
    height: 80,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 30,
    top: 260,
  },
  btnText: {
    fontSize: 35,
    alignSelf: 'center',
    color: Colors.White,
  },
});
