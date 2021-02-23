import {StyleSheet} from 'react-native';

const CARD_HEIGHT = 200;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  cardGame: {
    width: '100%',
    height: CARD_HEIGHT,
    backgroundColor: '#545454',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCard: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
