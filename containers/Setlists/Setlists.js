import React from 'react';
import { View, Text } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Loader from '../../components/Loader/Loader';

const SETLISTS_QUERY = gql`
  {
    user(id: "1") {
      setlists {
        id
      }
    }
  }
`;

const Setlists = () => {
  return (
    <Query query={SETLISTS_QUERY}>
      {({ loading, data }) => {
        if (loading) return <Loader />;

        return (
          <View>
            <Text>hay</Text>
          </View>
        );
      }}
    </Query>
  );
};

export default Setlists;
