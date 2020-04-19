import React, {useContext} from 'react';
import {View, Image, Text, SafeAreaView} from 'react-native';

import {styles} from '~/user/user.style';
import {AuthContext} from '~/auth/auth.context';
import {GoogleSignoutButton} from '~/auth/screen';
import {ScrollView} from 'react-native-gesture-handler';
import GamePlay from '~/quiz/component/gameplay.component';
import BackButton from '~/component/navigator/back-button.component';

const ProfileScreen = () => {
  const {user} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <BackButton />
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
        <GamePlay />
        <View style={styles.buttons}>
          <GoogleSignoutButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
