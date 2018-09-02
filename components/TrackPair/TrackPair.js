import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import COLORS from '../../constants/colors';

const TrackPair = ({ name, artist, scale }) => (
  <View style={styles.container}>
    <View style={styles.pair}>
      <Text
        style={[
          styles.title,
          scale && { fontSize: 32 },
        ]}
      >
        {name}
      </Text>
      <Text
        style={[
          styles.subtitle,
          scale && { fontSize: 25 },
        ]}
      >
        {artist}
      </Text>
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
    color: COLORS.PURPLE,
    marginBottom: 2,
    fontWeight: '700',
  },
  subtitle: {
    color: COLORS.RED,
    fontSize: 14,
    fontWeight: '700',
  },
});

export default TrackPair;
