import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { Feather } from '@expo/vector-icons';

import COLORS from '../../constants/colors';

console.log(Feather);

const FooterBar = () => (
  <View style={styles.container}>
    <View style={styles.buttons}>
      <Link to="/">
        <Feather
          name="home"
          color="white"
          size={30}
        />
      </Link>
      <Link to="/setlists">
        <Feather
          name="plus-circle"
          color="white"
          size={30}
        />
      </Link>
      <Link to="/setlists">
        <Feather
          name="sidebar"
          color="white"
          size={30}
        />
      </Link>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLORS.PURPLE,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 20,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.WHITE,
  },
});

export default FooterBar;
