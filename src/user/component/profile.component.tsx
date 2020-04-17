import React, {useContext} from 'react';
import {View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {styles} from '~/user/user.style';
import {AuthContext} from '~/auth/auth.context';

export const ProfileIcon = ({navigation}: any) => {
  const {user} = useContext(AuthContext);

  return (
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
  );
};
