import React from 'react';
import { StyleSheet, View } from 'react-native';

const Avatar = () => {
  return (
    <View style={styles.container} />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 105,
    width: 105,
    borderRadius: 105 / 2,
    backgroundColor: '#ddd',
    marginBottom: 10,
  },
});

export default Avatar;
