import React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Link
} from 'react-router-native';

const IconLinks = () => (
  <View style={styles.container}>
    <Link
      to="/tracks"
    >
      <Text style={styles.font}>TRACKS</Text>
    </Link>
    <Link
      to="/guitars"
    >
      <Text style={styles.font}>GUITARS</Text>
    </Link>
    <Link
      to="/setlists"
    >
      <Text style={styles.font}>SETLISTS</Text>
    </Link>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#410077',
    paddingTop: 20,
    paddingBottom: 20
  },
  font: {
    color: '#fff',
    fontSize: 18
  }
});

export default IconLinks;
