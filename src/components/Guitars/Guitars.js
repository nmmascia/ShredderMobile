import React from 'react';

import {
  View,
  Text,
  FlatList
} from 'react-native';

import Guitar from '../Guitar/Guitar';

export default class Guitars extends React.Component {
  renderItem({ item }) {
    return <Guitar guitar={item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.guitars}
        keyExtractor={(item) => item.id}
        renderItem={this.renderItem}
      />
    )
  }
}
