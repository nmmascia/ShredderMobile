import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const UserDetails = ({ name, username }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.username}>{username}</Text>
  </View>
);

UserDetails.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  username: {
    fontSize: 14,
  },
});

export default UserDetails;
