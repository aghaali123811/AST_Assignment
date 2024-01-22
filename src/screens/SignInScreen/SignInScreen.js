import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import styles from './styles';
import Header from '../../components/Headers/Header';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import ImagePath from '../../common/ImagePath';

function SignInScreen(props) {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '110579664410-jai59sfq83rasvcq5hpv18cqri3da233.apps.googleusercontent.com',
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const usrInfo = await GoogleSignin.signIn();
      setUserInfo(usrInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUserInfo(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Header Title={'Sign In'} navigation={props.navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {userInfo != null && (
          <Image
            source={{uri: userInfo.user.photo}}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
        )}
        {userInfo != null && <Text>{userInfo.user.name}</Text>}
        {userInfo != null && <Text>{userInfo.user.email}</Text>}

        {userInfo == null ? (
          <TouchableOpacity
            style={{
              padding: 15,
              borderWidth: 1,
              marginTop: 30,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#4285F4',
            }}
            onPress={() => {
              signIn();
            }}>
            <Image
              source={ImagePath.GoogleLogo}
              style={{width: 24, height: 24, margin: 10}}
            />
            <Text style={{fontSize: 20, color: 'white', fontWeight: '900'}}>
              Sign In With Google
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              padding: 20,
              borderWidth: 1,
              marginTop: 30,
              borderRadius: 10,
            }}
            onPress={() => {
              signOut();
            }}>
            <Text style={{fontSize: 18, color: 'black'}}>Sign Out</Text>
          </TouchableOpacity>
        )}

        {userInfo != null && (
          <TouchableOpacity
            style={{
              padding: 20,
              borderWidth: 1,
              marginTop: 30,
              borderRadius: 10,
            }}
            onPress={() => props.navigation.navigate('Maps')}>
            <Text style={{fontSize: 18, color: 'black'}}>Go To Maps</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default SignInScreen;
