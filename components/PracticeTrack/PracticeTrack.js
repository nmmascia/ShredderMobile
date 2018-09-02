import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TrackPair from '../TrackPair/TrackPair';

const PracticeTrack = ({ name, artist }) => (
  <View>
    <Text style={styles.title}>You are currently practicing...</Text>
    <View style={styles.fakeImage} />
    <View style={styles.detailsWrapper}>
      <TrackPair
        name={name}
        artist={artist}
        scale="10"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
  },
  fakeImage: {
    height: 300,
    backgroundColor: '#ddd',
  },
  detailsWrapper: {
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
});

export default PracticeTrack;
