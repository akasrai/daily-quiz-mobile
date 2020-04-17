import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {styles} from '../home.style';
import {ProfileIcon} from '~/user/component/profile.component';

const HomeScreen = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    auth().onAuthStateChanged((userState) => {
      setUser(userState);

      if (loading) {
        setLoading(false);
      }
    });
  }, [loading, user]);

  return (
    <SafeAreaView style={styles.container}>
      <ProfileIcon />
      <View>
        <Text style={styles.title}>Fuck</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
