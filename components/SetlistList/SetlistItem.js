import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const SetlistItem = ({ favorited }) => (
  <View style={styles.container}>
    <View style={styles.overview}>
      <Text>Name: Setlist</Text>
      <Text>Tracks: 0</Text>
      <Text>Practice Count: 0</Text>
    </View>
    <View style={styles.actions}>
      {favorited ? (
        <Text>Unfavorite</Text>
      ) : (
        <Text>Favorite</Text>
      )}
    </View>
  </View>
);

SetlistItem.propTypes = {
  favorited: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'magenta',
  },
  overview: {
    flex: 3,
  },
  actions: {
    flex: 1,
  },
});

export default SetlistItem;
