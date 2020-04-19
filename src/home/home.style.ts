import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 27,
    backgroundColor: '#02183b',
  },
  note: {
    padding: 30,
    color: 'white',
    textAlign: 'center',
  },
  profileImage: {
    flex: 0,
    marginTop: 90,
    alignItems: 'center',
    alignContent: 'center',
  },
  name: {
    padding: 20,
    fontSize: 25,
    color: '#fff',
  },
  playBtnWrapper: {
    flex: 0,
    alignItems: 'center',
  },
  playBtn: {
    width: 80,
    height: 80,
    padding: 6,
    alignItems: 'center',
    borderRadius: 100 / 2,
    justifyContent: 'center',
    backgroundColor: '#e4e4e4',
  },
  icon: {
    fontSize: 25,
  },
});
