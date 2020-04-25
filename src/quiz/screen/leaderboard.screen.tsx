import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, Image, Text, ScrollView, SafeAreaView} from 'react-native';

import {User} from '~/auth';
import {styles} from '../quiz.style';
import {AuthContext} from '~/auth/auth.context';
import {appGradientBG, appStyles} from '~/app/app.style';
import GamePlay from '~/quiz/component/gameplay.component';
import Hr from '~/component/form/horizontal-line.component';
import BackButton from '~/component/navigator/back-button.component';

const TopThree = ({user}: {user: User}) => {
  return (
    <View style={styles.lead}>
      <View>
        <View style={styles.leadTwo}>
          <Image style={styles.leadTwoImage} source={{uri: user.photo || ''}} />
        </View>
        <Text style={styles.leadName}>
          <Icon style={styles.silver} name="award" /> {user.name}
        </Text>
        <Text style={styles.leadName}>4500</Text>
      </View>

      <View>
        <View style={styles.leadOne}>
          <Image style={styles.leadOneImage} source={{uri: user.photo || ''}} />
        </View>
        <Text style={styles.leadName}>
          {' '}
          <Icon style={styles.gold} name="award" /> {user.name}
        </Text>
        <Text style={styles.leadName}>450</Text>
      </View>

      <View>
        <View style={styles.leadThree}>
          <Image
            style={styles.leadThreeImage}
            source={{uri: user.photo || ''}}
          />
        </View>
        <Text style={styles.leadName}>
          {' '}
          <Icon style={styles.bronze} name="award" /> {user.name}
        </Text>
        <Text style={styles.leadName}>4580</Text>
      </View>
    </View>
  );
};

const LeaderboardScreen = () => {
  const {user} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={appGradientBG} style={appStyles.container}>
        <BackButton />
        <View>
          <Text style={styles.title}>Leaderboard</Text>
        </View>
        <TopThree user={user} />

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
