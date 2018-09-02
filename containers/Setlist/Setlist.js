import React from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Title from '../../components/Title/Title';
import Loader from '../../components/Loader/Loader';
import TrackPair from '../../components/TrackPair/TrackPair';
import LinkButton from '../../components/LinkButton/LinkButton';
import SetlistTrackOverview from '../../components/SetlistTrackOverview/SetlistTrackOverview';

const SETLIST_QUERY = gql`
  query Setlist($id: ID!) {
    setlist(id: $id) {
      id
      favorited
      practicesCount
      tracks {
        id
        artist
        name
      }
    }
  }
`;

const Setlist = ({ match: { params } }) => {

  return (
    <Query
      query={SETLIST_QUERY}
      variables={{ id: params.id }}
    >
      {({ loading, data, error }) => {
        if (error) return <Text>Error!</Text>;
        if (loading) return <Loader />;
        const { setlist } = data;
        return (
          <View style={styles.container}>
            <View style={styles.body}>
              <Title text="Setlist" />
              <View style={styles.header}>
                <Text style={styles.headerText}>Here are some details about this setlist...</Text>
              </View>
              <View>
                <Text>Number of Practices: 0</Text>
                <Text>Number of Tracks: 0</Text>
                <Text>Guitar tunings: Standard, Drop D</Text>
                <Text>Guitars</Text>
                {setlist.guitars && setlist.guitars.map((guitar) => <Text>{guitar.manufacturer}</Text>)}
              </View>
              <View style={styles.header}>
                <Text style={styles.headerText}>{'Tracks'.toUpperCase()}</Text>
              </View>
              <SetlistTrackOverview
                tracks={setlist.tracks}
              />
            </View>
            <View style={styles.footer}>
              <LinkButton
                to={`/setlists/${params.id}/practice`}
                text="Begin Practice"
              />
            </View>
          </View>
        );
      }}
    </Query>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  item: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
  },
  header: {
    display: 'flex',
    height: 40,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  headerText: {
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default Setlist;
