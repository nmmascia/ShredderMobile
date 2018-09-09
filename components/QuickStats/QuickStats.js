import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const QuickStats = ({ stats }) => (
  <View style={styles.container}>
    {stats.map(({ label, value }) => {
      return (
        <View style={styles.item} key={label}>
          <Text style={styles.value}>{value}</Text>
          <Text style={styles.label}>{label}</Text>
        </View>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  label: {
    fontSize: 14,
  },
  value: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default QuickStats;
