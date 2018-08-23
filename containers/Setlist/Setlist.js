import React from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import Loader from '../../components/Loader/Loader';
import TrackPair from '../../components/TrackPair/TrackPair';

const SETLIST_QUERY = gql`
  {
    setlist(id: "1") {
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

const Setlist = () => {
  return (
    <Query query={SETLIST_QUERY}>
      {({ loading, data }) => {
        if (loading) return <Loader />;
        const { setlist } = data;
        return (
          <View style={styles.container}>
            <View style={styles.body}>
              <Title text="Setlist" />
              <View style={styles.header}>
                <Text style={styles.headerText}>{'Tracks'.toUpperCase()}</Text>
              </View>
              <FlatList
                data={setlist.tracks}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.item}>
                      <TrackPair {...item} />
                    </View>
                  );
                }}
              />
            </View>
            <View style={styles.footer}>
              <Button
                text="Begin Practice"
                onPress={console.log}
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
