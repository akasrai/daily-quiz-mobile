import {
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {Text, Image, useWindowDimensions, StyleSheet, View} from 'react-native';

import HomeScreen from '~/home/screen/home.screen';
import {AuthContext} from '~/auth/auth.context';
import Hr from '~/component/form/horizontal-line.component';

const Drawer = createDrawerNavigator();

const Profile = () => {
  const {user} = useContext(AuthContext);

  return (
    <View style={styles.profile}>
      <View style={styles.photoWrapper}>
        <Image
          style={styles.photo}
          source={
            user.photo ? {uri: user.photo} : require('~/assets/image/dp.png')
          }
        />
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
};

const CustomDrawerContent = (props: any) => {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      <Profile />
      <DrawerItemList {...props} />
      <DrawerItem
        onPress={() => navigation.navigate('Leaderboard')}
        label={() => <Text style={styles.label}>Leaderboard</Text>}
        icon={({focused}) => <FIcon style={styles.ficon} name="trophy" />}
      />
    </DrawerContentScrollView>
  );
};

const AppDrawer = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerStyle={styles.drawer}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerType={dimensions.width >= 768 ? 'permanent' : 'slide'}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          swipeEnabled: true,
          gestureEnabled: true,
          drawerLabel: () => <Text style={styles.label}>Home</Text>,
          drawerIcon: ({focused}) => <MIcon style={styles.micon} name="home" />,
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  micon: {
    color: '#fff',
    fontSize: 20,
  },
  ficon: {
    color: '#fff',
    fontSize: 14,
  },
  label: {
    color: '#fff',
    fontSize: 16,
  },
  drawer: {
    backgroundColor: '#02183b',
  },
  profile: {
    flex: 0,
    padding: 20,
    width: '100%',
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  photoWrapper: {
    width: 70,
    height: 70,
    padding: 1,
    marginRight: 15,
    marginBottom: 15,
    overflow: 'hidden',
    borderRadius: 100 / 1,
    backgroundColor: '#fff',
  },
  photo: {
    width: 68,
    height: 68,
    borderRadius: 100 / 1,
  },
  infoWrapper: {
    paddingTop: 20,
  },
  name: {
    fontSize: 14,
    color: '#fff',
  },
  email: {
    color: '#fff',
    fontSize: 10,
  },
});

export default AppDrawer;
