import React from 'react';
import { ScrollView, FlatList, Text, View } from 'react-native';
import { Link } from 'react-router-native';

import SetlistItem from './SetlistItem';

const SetlistList = ({ setlists = [] }) => (
  <ScrollView>
    <Text>Setlists Overview</Text>
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
  </ScrollView>
);

export default SetlistList;
