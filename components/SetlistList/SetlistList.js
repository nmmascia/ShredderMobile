import React from 'react';
import { ScrollView, StyleSheet, FlatList, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import Title from '../Title/Title';
import Button from '../Button/Button';
import SetlistItem from './SetlistItem';

const CREATE_SETLIST = gql`
  mutation CreateSetlist {
    createSetlist {
      id
      favorited
    }
  }
`;

const SetlistList = ({ setlists = [] }) => (
  <ScrollView>
    <Title
      text="Setlists Overview"
    />
    <FlatList
      data={setlists}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => {
        return (
          <Link to={`/setlists/${item.id}`}>
            <SetlistItem {...item} />
          </Link>
        );
      }}
    />
    <View style={styles.button}>
      <Mutation
        mutation={CREATE_SETLIST}
      >
        {(createSetlist) => {
          return (
            <Button
              onPress={() => createSetlist()}
              text="Add Setlist"
            />
          );
        }}
      </Mutation>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  // container: {
  //   display:
  // }
});

export default SetlistList;
