import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Guitar = ({ guitar }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>
        Manufacturer: {guitar.manufacturer}
      </Text>
      <Text style={styles.item}>
        Model: {guitar.model}
      </Text>
    </View>
  );
};

Guitar.propTypes = {
  guitar: PropTypes.shape({
    manufacturer: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: '#000',
  },
  item: {
    display: 'flex',
    flex: 1
  }
});

export default Guitar;
