import React, {useContext} from 'react';
import {View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {styles} from '~/user/user.style';
import {AuthContext} from '~/auth/auth.context';
import {useNavigation} from '@react-navigation/native';

export const ProfileIcon = () => {
  const {user} = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <View style={styles.profileIcon}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <View style={styles.profileIconRing}>
          <View style={styles.profileIconWrapper}>
            <Image
              style={styles.profileIconImage}
              source={{uri: user.photo || ''}}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const ProfileImage = () => {
  const {user} = useContext(AuthContext);

  return (
    <View style={styles.profileImageRing}>
      <Image
        style={styles.profileImageWrapper}
        source={{uri: user.photo || ''}}
      />
    </View>
  );
};
