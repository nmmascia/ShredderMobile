import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Loader from '../../components/Loader/Loader';
import TracksList from '../../components/TracksList/TracksList';

const USER_TRACKS_QUERY = gql`
  query Tracks {
    user(id: "1") {
      tracks {
        id
        name
        artist
        guitar {
          id
          manufacturer
          model
        }
      }
    }
  }
`;

export default class Tracks extends React.Component {
  render() {
    return (
      <Query query={USER_TRACKS_QUERY}>
        {({ loading, data, error }) => {
          if (loading) return <Loader />;
          if (error) return <Text>Error!</Text>;
          return (
            <TracksList
              tracks={data.user.tracks}
            />
          );
        }}
      </Query>
    );
  }
}
