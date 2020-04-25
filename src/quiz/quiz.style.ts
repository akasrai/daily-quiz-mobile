import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lead: {
    marginTop: 27,
    paddingTop: 10,
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 10,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  leadOne: {
    width: 70,
    height: 70,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 100 / 2,
  },
  leadOneImage: {
    width: 70,
    height: 70,
  },
  leadTwo: {
    width: 60,
    height: 60,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 100 / 2,
  },
  leadTwoImage: {
    width: 60,
    height: 60,
  },
  leadThree: {
    width: 50,
    height: 50,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 100 / 2,
  },
  leadThreeImage: {
    width: 50,
    height: 50,
  },
  content: {
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#fff',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  pointsTable: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    height: '71%',
  },
  pointsRow: {
    flex: 0,
    padding: 15,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    justifyContent: 'space-between',
  },
  profileImageWrapper: {
    width: 35,
    height: 35,
    overflow: 'hidden',
    borderRadius: 100 / 2,
  },
  profileImage: {
    width: 35,
    height: 35,
  },
  name: {
    width: 230,
    padding: 6,
    textAlign: 'left',
  },
  point: {
    padding: 6,
    textAlign: 'left',
    fontWeight: 'bold',
  },
});
