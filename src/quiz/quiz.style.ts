import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 26,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    paddingTop: 20,
    textAlign: 'center',
  },
  gold: {
    fontSize: 12,
    color: '#f3b72e',
  },
  silver: {
    fontSize: 12,
    color: '#959595',
  },
  bronze: {
    fontSize: 12,
    color: '#c67526',
  },
  lead: {
    paddingTop: 25,
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  leadName: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
  leadOne: {
    width: 80,
    height: 80,
    marginBottom: 5,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 100 / 2,
  },
  leadOneImage: {
    width: 80,
    height: 80,
  },
  leadTwo: {
    width: 60,
    height: 60,
    marginBottom: 5,
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
    width: 60,
    height: 60,
    marginBottom: 5,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 100 / 2,
  },
  leadThreeImage: {
    width: 60,
    height: 60,
  },
  content: {
    margin: 10,
    borderColor: '#fff',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  pointsTable: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    height: '58%',
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
    width: 210,
    padding: 6,
    textAlign: 'left',
  },
  point: {
    padding: 6,
    textAlign: 'left',
    fontWeight: 'bold',
  },
});
