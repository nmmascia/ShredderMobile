import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TrackPair from '../TrackPair/TrackPair';

const PracticeTrack = ({ name, artist }) => (
  <View style={styles.container}>
    <View style={styles.fakeImage} />
    <View style={styles.detailsWrapper}>
      <Text style={styles.name}>{name}</Text>
      <Text>{artist}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  fakeImage: {
    height: 115,
    width: 115,
    backgroundColor: '#ddd',
    marginBottom: 10,
  },
  detailsWrapper: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
  },
  artist: {
    fontSize: 22,
    fontWeight: '500',
  },
});

export default PracticeTrack;
