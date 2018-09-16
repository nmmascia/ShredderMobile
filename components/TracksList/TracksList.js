import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';

import LinkButton from '../LinkButton/LinkButton';
import DeleteTrackButton from '../../containers/DeleteTrackButton/DeleteTrackButton';

import COLORS from '../../constants/colors';

export default class TracksList extends React.Component {
  renderTrack({ item }) {
    return (
      <View style={styles.trackContainer} key={item.id}>
        <View>
          <Text style={styles.trackName}>{item.name}</Text>
          <Text style={styles.trackArtist}>{item.artist}</Text>
        </View>
        <View style={styles.editButtons}>
          <Feather
            color={COLORS.PURPLE}
            name="edit"
            size={28}
          />
          <DeleteTrackButton trackId={item.id} />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.tracks}
          keyExtractor={({ id }) => id}
          renderItem={this.renderTrack}
        />
        <LinkButton
          to="/tracks/create"
          text="Add new track"
        />
      </View>
    );
  }
}

TracksList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    guitar: PropTypes.shape({
      id: PropTypes.string.isRequired,
      manufacturer: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
    }),
  })).isRequired,
};

const styles = StyleSheet.create({
  trackContainer: {
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trackName: {
    fontSize: 18,
    fontWeight: '700',
  },
  trackArtist: {
    fontSize: 14,
    fontWeight: '500',
  },
  editButtons: {
    display: 'flex',
    flexDirection: 'row',
  },
});
