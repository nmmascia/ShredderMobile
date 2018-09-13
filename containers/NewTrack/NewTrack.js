import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AddTrackToSetlist from '../AddTrackToSetlist/AddTrackToSetlist';

export default class NewTrack extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <AddTrackToSetlist />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
