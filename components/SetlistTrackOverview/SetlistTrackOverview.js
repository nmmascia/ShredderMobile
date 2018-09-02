import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import TrackPair from '../TrackPair/TrackPair';

const SetlistTrackOverview = (props) => {
  return !props.tracks.length ? (
    <View>
      <Text>You do not have any tracks yet!</Text>
      <Text>Click here to start adding tracks!</Text>
    </View>
  ) : (
    <FlatList
      data={props.tracks}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => {
        return (
          <View style={styles.item}>
            <TrackPair {...item} />
          </View>
        );
      }}
    />
  )
};

const styles = StyleSheet.create({
  item: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
  },
});

export default SetlistTrackOverview;
