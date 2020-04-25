import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#02183b',
  },
  signOutButtonWrapper: {
    right: 15,
    zIndex: 888,
    marginTop: 18,
    position: 'absolute',
  },
  signOutButton: {
    width: 40,
    height: 40,
    padding: 10,
    paddingLeft: 12,
    position: 'relative',
    borderRadius: 100 / 2,
    backgroundColor: 'transparent',
  },
  icon: {
    color: '#fff',
    fontSize: 18,
  },
});
