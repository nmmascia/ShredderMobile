import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import {
  Link
} from 'react-router-native';

const IconLinks = () => (
  <View style={styles.container}>
    <Link
      to="/tracks"
      component={TouchableOpacity}
      activeOpacity={0.8}
    >
      <Text style={styles.font}>TRACKS</Text>
    </Link>
    <Link
      to="/guitars"
      component={TouchableOpacity}
      activeOpacity={0.8}
    >
      <Text style={styles.font}>GUITARS</Text>
    </Link>
    <Link
      to="/setlists"
      component={TouchableOpacity}
      activeOpacity={0.8}
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
    flex: 1,
    color: '#fff',
    fontSize: 18
  }
});

export default IconLinks;
