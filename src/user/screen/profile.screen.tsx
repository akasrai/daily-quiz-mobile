import React, {useContext} from 'react';
import {View, Image, Text, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from '~/user/user.style';
import {AuthContext} from '~/auth/auth.context';
import {GoogleSignoutButton, GoogleTopSignoutButton} from '~/auth/screen';
import {ScrollView} from 'react-native-gesture-handler';
import GamePlay from '~/quiz/component/gameplay.component';
import BackButton from '~/component/navigator/back-button.component';
import {appGradientBG, appStyles} from '~/app/app.style';

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
                source={{uri: user.photo || ''}}
              />
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.email}>{user.email}</Text>
            </View>
          </View>

          <View style={styles.points}>
            <GamePlay />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ProfileScreen;
