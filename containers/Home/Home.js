import React from 'react';
import { View, Text } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Loader from '../../components/Loader/Loader';
import Profile from '../../components/Profile/Profile';

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
        <Profile
          name="Nicholas Mascia"
          username="@nmmascia"
          setlistsCount={4}
          numberOfDaysPracticedStreak={10}
        />
      );
    }}
  </Query>
);

export default Home;
