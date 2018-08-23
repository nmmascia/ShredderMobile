import React from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import Loader from '../../components/Loader/Loader';

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
              <FlatList
                data={setlist.tracks}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => {
                  return (
                    <View key={item.id}>
                      <Text>{item.name}</Text>
                      <Text>{item.artist}</Text>
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
});

export default Setlist;
