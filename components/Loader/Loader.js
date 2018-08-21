import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Loader = (props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color="#000"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
