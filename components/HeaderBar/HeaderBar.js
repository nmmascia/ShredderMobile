import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';

import COLORS from '../../constants/colors';

const HeaderBar = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>SHREDDER</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    paddingTop: Constants.statusBarHeight,
    marginBottom: 10,
  },
  text: {
    color: COLORS.PURPLE,
    fontSize: 22,
    fontWeight: '700',
    paddingBottom: 10,
    textAlign: 'center',
  },
});

export default HeaderBar;
