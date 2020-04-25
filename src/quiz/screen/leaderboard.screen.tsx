import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {View, Image, Text, ScrollView, SafeAreaView} from 'react-native';

import {styles} from '../quiz.style';
import {AuthContext} from '~/auth/auth.context';
import {appGradientBG, appStyles} from '~/app/app.style';
import GamePlay from '~/quiz/component/gameplay.component';
import Hr from '~/component/form/horizontal-line.component';

const LeaderboardScreen = () => {
  const {user} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={appGradientBG} style={appStyles.container}>
        <View style={styles.lead}>
          <View style={styles.leadTwo}>
            <Image
              style={styles.leadTwoImage}
              source={{uri: user.photo || ''}}
            />
          </View>

          <View style={styles.leadOne}>
            <Image
              style={styles.leadOneImage}
              source={{uri: user.photo || ''}}
            />
          </View>

          <View style={styles.leadThree}>
            <Image
              style={styles.leadThreeImage}
              source={{uri: user.photo || ''}}
            />
          </View>
        </View>

        <View style={styles.content}>
          <GamePlay />
          <Hr />
          <ScrollView style={styles.pointsTable}>
            <View style={styles.pointsRow}>
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

            <View style={styles.pointsRow}>
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

            <View style={styles.pointsRow}>
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

            <View style={styles.pointsRow}>
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

            <View style={styles.pointsRow}>
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

            <View style={styles.pointsRow}>
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

            <View style={styles.pointsRow}>
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

            <View style={styles.pointsRow}>
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

            <View style={styles.pointsRow}>
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

            <View style={styles.pointsRow}>
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

            <View style={styles.pointsRow}>
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

            <View style={styles.pointsRow}>
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

            <View style={styles.pointsRow}>
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

            <View style={styles.pointsRow}>
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

            <View style={styles.pointsRow}>
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

            <View style={styles.pointsRow}>
              <View style={styles.profileImageWrapper}>
                <Image
                  style={styles.profileImage}
                  source={{uri: user.photo || ''}}
                />
              </View>
              <View>
                <Text style={styles.name}>{user.name} Fuck</Text>
              </View>
              <View>
                <Text style={styles.point}>500pts</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LeaderboardScreen;
