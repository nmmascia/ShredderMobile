import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import COLORS from '../../constants/colors';

const Tag = ({ text }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: COLORS.PURPLE,
    borderRadius: 4,
    marginLeft: 2,
    marginRight: 2,
  },
  text: {
    padding: 2,
    backgroundColor: COLORS.PURPLE,
    borderRadius: 4,
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
});

export default Tag;
