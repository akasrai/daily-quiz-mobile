import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {View, Image, Text, SafeAreaView} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

import {styles} from '../home.style';
import {LogoSm} from '~/assets/image/logo';
import {AuthContext} from '~/auth/auth.context';
import GamePlay from '~/quiz/component/gameplay.component';
import Hr from '~/component/form/horizontal-line.component';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {user} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#02183b', '#032862', '#fff', '#fff', '#fff']}
        style={{flex: 1}}>
        <ScrollView>
          <View style={styles.quoteWrapper}>
            <LogoSm />
            <Text style={styles.quote}>This fucking cool Quotes.</Text>
          </View>
          <View style={styles.content}>
            <GamePlay />
            <Hr />
            <ScrollView>
              <View style={styles.pointsTable}>
                <View style={styles.profileImageWrapper}>
                  <Image
                    style={styles.profileImage}
                    source={{uri: user.photo || ''}}
                  />
                </View>
                <View>
                  <Text style={styles.name}>{user.name}</Text>
                </View>
                <View>
                  <Text style={styles.point}>500pts</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;
