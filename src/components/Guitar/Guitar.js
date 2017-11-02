import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Guitar = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>
        Manufacturer: {props.manufacturer}
      </Text>
      <Text style={styles.item}>
        Model: {props.model}
      </Text>
    </View>
  );
};

Guitar.propTypes = {
  manufacturer: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  item: {
    display: 'flex',
    flex: 1,
  }
});

export default Guitar;
