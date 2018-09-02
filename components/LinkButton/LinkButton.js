import React from 'react';
import { Link } from 'react-router-native';
import { StyleSheet, View, Text } from 'react-native';

const LinkButton = ({ to, text }) => (
  <Link to={to}>
    <View style={styles.container}>
      <Text style={styles.text}>{text.toUpperCase()}</Text>
    </View>
  </Link>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#673AB7',
    height: 50,
  },
  text: {
    color: '#eee',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default LinkButton;
