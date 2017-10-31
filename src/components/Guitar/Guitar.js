import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text
} from 'react-native';

const Guitar = ({ guitar }) => {
  return (
    <View>
      <Text>
        Manufacturer: {guitar.manufacturer}
      </Text>
      <Text>
        Model: {guitar.model}
      </Text>
    </View>
  );
};

Guitar.propTypes = {
  manufacturer: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
};

export default Guitar;
