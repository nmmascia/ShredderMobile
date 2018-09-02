import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TrackPair from '../TrackPair/TrackPair';

const PracticeTrack = ({ name, artist }) => (
  <View style={styles.container}>
    <Text style={styles.title}>You are currently practicing...</Text>
    <TrackPair
      name={name}
      artist={artist}
      scale="10"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
  },
});

export default PracticeTrack;
