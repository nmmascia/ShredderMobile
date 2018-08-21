import React from 'react';
import { View, Text } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const QUERY = gql`
  {
    user(id: "1") {
      id
      name
    }
  }
`;

const Home = () => (
  <Query query={QUERY}>
    {({ loading, data }) => {
      if (loading) {
        return (
          <View>
            <Text>Loading...</Text>
          </View>
        );
      }

      return (
        <View>
          <Text>{`${data.user.name}`}</Text>
        </View>
      );
    }}
  </Query>
);

export default Home;
