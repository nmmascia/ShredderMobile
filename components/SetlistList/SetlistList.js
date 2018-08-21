import React from 'react';
import { ScrollView, FlatList, Text, View } from 'react-native';

const SetlistList = ({ setlists = [] }) => (
  <ScrollView>
    <Text>Setlists Overview</Text>
    <FlatList
      data={setlists}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => {
        return (
          <View>
            <Text>Setlist</Text>
            <Text>{item.id}</Text>
          </View>
        );
      }}
    />
  </ScrollView>
);

export default SetlistList;
