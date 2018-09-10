import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PracticeHeader = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.currentTrackDetails}>
        <Text>You are currently practicing</Text>
        <Text>Setlist Name</Text>
      </View>
      <View style={styles.currentTrackNumberDetails}>
        <Text>Track {`${props.currentTrackNumber} of ${props.totalNumberOfTracks}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 10,
  },
  currentTrackDetails: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 5,
  },
  currentTrackNumberDetails: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default PracticeHeader;
