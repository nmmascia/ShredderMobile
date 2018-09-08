import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Tag from '../Tag/Tag';

import COLORS from '../../constants/colors';

const Tags = ({ header, tags }) => (
  <View style={styles.container}>
    {header && <Text style={styles.header}>{header}</Text>}
    <View style={styles.tagsContainer}>
      {tags.map((tag) => {
        return <Tag key={tag.text} {...tag} />;
      })}
    </View>
  </View>
);

Tags.propTypes = {
  header: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })),
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 5,
  },
  tagsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  header: {
    fontSize: 18,
    color: COLORS.RED,
    fontWeight: '700',
    paddingBottom: 5,
  },
});

export default Tags;
