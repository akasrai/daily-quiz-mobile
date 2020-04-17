import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    width: 54,
    height: 54,
    margin: 2,
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
    marginTop: 27,
    backgroundColor: '#02183b',
  },
  profile: {
    flex: 1,
    width: '100%',
    paddingTop: 130,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#02183b',
  },
  profileImageRing: {
    margin: 25,
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 100 / 1,
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
    padding: 20,
  },
});
