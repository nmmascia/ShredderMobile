import React from 'react';
import { View, Text } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Loader from '../../components/Loader/Loader';

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
    {({ loading, data, error }) => {
      if (loading) return <Loader />;
      if (error) return <Text>Error!</Text>

      return (
        <View>
          <Text>{`${data.user.name}`}</Text>
        </View>
      );
    }}
  </Query>
);

export default Home;
