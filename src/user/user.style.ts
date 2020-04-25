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
  profileWrapper: {
    margin: 20,
    marginTop: 160,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  profile: {
    flex: 0,
    width: '100%',
    marginTop: -60,
    alignItems: 'center',
    alignContent: 'center',
  },
  info: {
    paddingTop: 10,
    paddingBottom: 0,
  },
  profileImageRing: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderRadius: 100 / 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
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
    color: '#000',
    textAlign: 'center',
  },
  email: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  points: {
    margin: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  buttons: {
    paddingTop: 10,
    paddingLeft: 40,
    paddingRight: 40,
  },
});
