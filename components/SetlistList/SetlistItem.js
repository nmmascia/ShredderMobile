import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Title from '../Title/Title';
import TrackIcon from '../TrackIcon/TrackIcon';
import FavoriteToggle from '../../containers/FavoriteToggle/FavoriteToggle';

import COLORS from '../../constants/colors';

const SetlistItem = ({ id, favorited, practicesCount, numberOfTracks }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Title text="Setlist" />
      <FavoriteToggle
        setlistId={id}
        favorited={favorited}
      />
    </View>
    <View style={styles.overview}>
      <View style={styles.item}>
        <TrackIcon color={COLORS.PURPLE} size={26} />
        <Text style={styles.value}>{numberOfTracks}</Text>
        <Text style={styles.label}>Number of Tracks</Text>
      </View>
      <View style={styles.item}>
        <Feather color={COLORS.PURPLE} name="info" size={26} />
        <Text style={styles.value}>{practicesCount}</Text>
        <Text style={styles.label}>Practices Count</Text>
      </View>
    </View>
  </View>
);

SetlistItem.propTypes = {
  id: PropTypes.string.isRequired,
  favorited: PropTypes.bool.isRequired,
  practicesCount: PropTypes.number.isRequired,
  numberOfTracks: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  overview: {
    flex: 3,
  },
  actions: {
    flex: 1,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  value: {
    fontSize: 22,
    color: COLORS.PURPLE,
    fontWeight: '700',
    paddingLeft: 5,
    paddingRight: 5,
  },
  label: {
    fontSize: 16,
    color: COLORS.RED,
    fontWeight: '500',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default SetlistItem;
