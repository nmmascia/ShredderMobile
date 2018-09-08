import React from 'react';
import { Text } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Loader from '../../components/Loader/Loader';
import SetlistList from '../../components/SetlistList/SetlistList';

const SETLISTS_QUERY = gql`
  {
    user(id: "1") {
      id
      setlists {
        id
        favorited,
        practicesCount,
        numberOfTracks
      }
    }
  }
`;

const Setlists = () => (
  <Query query={SETLISTS_QUERY}>
    {({ loading, data, error }) => {
      if (loading) return <Loader />;
      if (error) return <Text>Error!</Text>;
      const { user: { setlists } } = data;
      return <SetlistList setlists={setlists} />;
    }}
  </Query>
);

export default Setlists;
