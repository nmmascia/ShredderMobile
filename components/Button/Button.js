import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

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
    backgroundColor: '#673AB7',
    height: 50,
  },
  text: {
    color: '#eee',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default Button;
