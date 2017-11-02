import React from 'react';

import {
  View,
  Text,
  FlatList
} from 'react-native';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Guitar from '../Guitar/Guitar';

class Guitars extends React.Component {
  renderItem({ item }) {
    return <Guitar {...item} />;
  }

  render() {
    if (this.props.data.loading) {
      return <View><Text>Loading...</Text></View>
    }
    return (
      <FlatList
        data={this.props.data.user.guitars}
        keyExtractor={(item) => item.id}
        renderItem={this.renderItem}
      />
    )
  }
}

export default graphql(gql`
  query {
    user(id: "1") {
      guitars {
        id
        manufacturer
        model
      }
    }
  }
`)(Guitars);
