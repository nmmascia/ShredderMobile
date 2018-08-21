import React from 'react';
import { View, Text } from 'react-native';
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
        favorited
      }
    }
  }
`;

const Setlists = () => {
  return (
    <Query query={SETLISTS_QUERY}>
      {({ loading, data }) => {
        if (loading) return <Loader />;
        const { user: { setlists } } = data;
        return <SetlistList setlists={setlists} />;
      }}
    </Query>
  );
};

export default Setlists;
