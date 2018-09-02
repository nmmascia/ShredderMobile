import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Title = ({ text }) => (
  <Text
    style={styles.container}
  >
    {text}
  </Text>
);

const styles = StyleSheet.create({
  container: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default Title;
