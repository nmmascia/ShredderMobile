import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PracticeDetails = (props) => (
  <View>
    {props.details.map((detail) => {
      return (
        <View style={styles.item} key={detail.type}>
          <View style={styles.icon} />
          <View style={styles.description}>
            <Text style={styles.typeText}>{detail.type.toUpperCase()}</Text>
            <Text style={styles.valueText}>{detail.value}</Text>
          </View>
        </View>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 10,
  },
  icon: {
    height: 50,
    width: 50,
    backgroundColor: '#ddd',
  },
  description: {
    paddingLeft: 10,
  },
  valueText: {
    fontSize: 18,
    fontWeight: '700',
  },
  typeText: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default PracticeDetails;
