import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

const FooterBar = () => (
  <View style={styles.container}>
    <View style={styles.buttons}>
      <Link to="/">
        <Text>Home</Text>
      </Link>
      <Link to="/setlists">
        <Text>Setlists</Text>
      </Link>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    backgroundColor: 'magenta',
    width: '100%',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default FooterBar;
