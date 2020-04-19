import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  profileIcon: {
    top: 15,
    right: 10,
    position: 'absolute',
  },
  profileIconRing: {
    width: 60,
    height: 60,
    margin: 25,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 100 / 2,
    alignSelf: 'flex-end',
  },
  profileIconWrapper: {
    margin: 2,
    width: 54,
    height: 54,
    borderWidth: 1,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadius: 100 / 2,
  },
  profileIconImage: {
    width: 54,
    height: 54,
  },
  container: {
    flex: 1,
    marginTop: 26,
    backgroundColor: '#02183b',
  },
  profile: {
    flex: 0,
    width: '100%',
    paddingTop: 130,
    alignItems: 'center',
    alignContent: 'center',
  },
  info: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  profileImageRing: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderRadius: 100 / 1,
    borderColor: '#b2b2b2',
  },
  profileImageWrapper: {
    margin: 4,
    width: 110,
    height: 110,
    borderWidth: 1,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadius: 100 / 1,
  },
  profileImage: {
    width: 110,
    height: 110,
  },
  name: {
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
  },
  email: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  buttons: {
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
  },
});
