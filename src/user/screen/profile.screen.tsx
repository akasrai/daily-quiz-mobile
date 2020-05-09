import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Image, Text, SafeAreaView} from 'react-native';

import {styles} from '~/user/user.style';
import {AuthContext} from '~/auth/auth.context';
import {GoogleSignoutButton} from '~/auth/screen';
import {appGradientBG, appStyles} from '~/app/app.style';
import GameStatus from '~/quiz/component/game-status.component';
import BackButton from '~/component/navigator/back-button.component';

const ProfileScreen = () => {
  const {user} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={appGradientBG} style={appStyles.container}>
        <BackButton />
        <GoogleSignoutButton />

        <View style={styles.profileWrapper}>
          <View style={styles.profile}>
            <View style={styles.profileImageRing}>
              <Image
                style={styles.profileImageWrapper}
                source={
                  user.photo
                    ? {uri: user.photo}
                    : require('~/assets/image/dp.png')
                }
              />
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.email}>{user.email}</Text>
            </View>
          </View>

          <View style={styles.points}>
            <GameStatus />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ProfileScreen;
