import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

import COLORS from '../../constants/colors';

const FooterBar = () => (
  <View style={styles.container}>
    <View style={styles.buttons}>
      <Link to="/">
        <Text style={styles.text}>H</Text>
      </Link>
      <Link to="/setlists">
        <Text style={styles.text}>S</Text>
      </Link>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    backgroundColor: COLORS.PURPLE,
    width: '100%',
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
