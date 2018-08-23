import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TrackPair = ({ name, artist }) => (
  <View style={styles.container}>
    <View style={styles.pair}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{artist}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  pair: {
    display: 'flex',
  },
  title: {
    fontSize: 16,
    color: 'magenta',
    marginBottom: 2,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
  },
});

export default TrackPair;
