import React, {useContext} from 'react';
import {View, Image, Text, SafeAreaView} from 'react-native';

import {styles} from '~/user/user.style';
import {AuthContext} from '~/auth/auth.context';
import {GoogleSignoutButton} from '~/auth/screen';

const ProfileScreen = () => {
  const {user} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileImageRing}>
          <Image
            style={styles.profileImageWrapper}
            source={{uri: user.photo || ''}}
          />
        </View>
        <View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
          <View style={styles.buttons}>
            <GoogleSignoutButton />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
