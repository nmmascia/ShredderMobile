import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

import COLORS from '../../constants/colors';

const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      accessibilityComponentType="button"
      accessibilityTraits="button"
    >
      <View style={styles.container}>
        <Text style={styles.text}>{text.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.PURPLE,
    height: 50,
  },
  text: {
    color: COLORS.WHITE,
    fontSize: 20,
    fontWeight: '700',
  },
});

export default Button;
